function solve(params) {
    function escapeHTML(str) {
        str = str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        return str;
    };

    let objectsArr = JSON.parse(params);
    let keys = Object.keys(objectsArr[0]);
    let result = `<table>\n  <tr><th>${escapeHTML(keys[0])}</th><th>${escapeHTML(keys[1])}</th></tr>\n`;

    objectsArr
        .slice(1)
        .map(obj => result += `  <tr><td>${escapeHTML(obj[keys[0]])}</td><td>${Number(obj[keys[1]])}</td></tr>\n`);
    result += '</table>'

    return result;
}

console.log(solve(
    [`[{"name":"Pesho","score":479},
    {"name":"Gosho","score":205}]`]
));