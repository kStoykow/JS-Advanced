function solve(params) {
    const notEmptyString = (e) => e.length > 0;
    const trimStrings = (e) => e.trim();
    const parseIfNumber = (e) => e == Number(e) ? Number(Number(e).toFixed(2)) : e;

    function deserializeData(str) {
        return str.split('|')
            .filter(notEmptyString)
            .map(trimStrings)
            .map(parseIfNumber);
    }

    let keys = deserializeData(params[0]);
    return JSON.stringify(
        params.slice(1)
            .map(deserializeData)
            .map(
                line => line.reduce((result, values, i) => {
                    result[keys[i]] = values;
                    return result;
                }, {})
            )
    );
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 43.0757  |25.6172 |',
    '| Beijing | 34.50 | 56.11 |']));