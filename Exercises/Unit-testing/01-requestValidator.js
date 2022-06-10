function requestValidator(obj) {
    const methodList = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[\.a-zA-Z0-9]+$/;
    const versionList = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^[^<>\\&'"]+$/;

    const errorParserMap = {
        'method': 'Method',
        'uri': 'URI',
        'version': 'Version',
        'message': 'Message',
    };
    const regexPatternsMap = {
        'uri': (obj, prop, pattern, msgParser) => {
            if (obj[prop] == undefined || (obj[prop] != '*' && obj[prop].match(pattern) == null)) {
                throw new Error(`Invalid request header: Invalid ${msgParser[prop]}`);
            }
        },
        'message': (obj, prop, pattern, msgParser) => {
            if (obj[prop] == undefined || (obj[prop] != '' && obj[prop].match(pattern) == null)) {
                throw new Error(`Invalid request header: Invalid ${msgParser[prop]}`);
            }
        },
    }

    function validator(obj, msgParser, listOrPattern, prop, regexMap) {
        if (Array.isArray(listOrPattern)) {
            if (obj[prop] == undefined || listOrPattern.includes(obj[prop]) == false) {
                throw new Error(`Invalid request header: Invalid ${msgParser[prop]}`);
            }
        } else {
            regexMap[prop](obj, prop, listOrPattern, msgParser);
        }

        return obj[prop];
    }

    let methodValidateOrThrow = validator.bind(undefined, obj, errorParserMap);
    let uriValidateOrThrow = validator.bind(undefined, obj, errorParserMap);
    let versionValidateOrThrow = validator.bind(undefined, obj, errorParserMap);
    let msgValidateOrThrow = validator.bind(undefined, obj, errorParserMap);

    methodValidateOrThrow(methodList, 'method');
    uriValidateOrThrow(uriPattern, 'uri', regexPatternsMap);
    versionValidateOrThrow(versionList, 'version');
    msgValidateOrThrow(messagePattern, 'message', regexPatternsMap);

    return obj;
}

module.exports = requestValidator;

console.log(requestValidator(
    {
        method: 'GET',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    }
));