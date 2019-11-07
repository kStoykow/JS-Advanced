function solve(input) {
    function escapeHTML(str) {
        str = str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        return str;
    };

    let objectsArr = JSON.parse(input);
    let keys = Object.keys(objectsArr[0]);

    let result = `<table>\n   <tr>`;
    for (const key of keys) {
        result += `<th>${escapeHTML(key)}</th>`;
    }
    result += `</tr>\n`;

    objectsArr
        .map(obj => {
            let values = Object.values(obj);
            for (let i = 0; i < values.length; i++) {
                if (i == 0) {
                    result += '   <tr>';
                }
                
                typeof values[i] == 'string'
                    ? result += `<td>${escapeHTML(values[i])}</td>`
                    : result += `<td>${Number(values[i])}</td>`
            }
            result += `</tr>\n`;
        });

    result += '</table>';

    return result;
}

console.log(solve(
    [`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`]
));