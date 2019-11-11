function solve(data) {
    function escapeHTML(str) {
        str = str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        return str;
    };

    function addContentTag(tag, content) {
        if (typeof content === 'string') {
            return res += `        <${tag}>${escapeHTML(content)}</${tag}>\n`;
        }
        return res += `        <${tag}>${Number(content)}</${tag}>\n`;
    }
    function addOpenTr(tag) {
        return res += `    <${tag}>\n`;
    }
    function addCloseTr(tag) {
        return res += `    </${tag}>\n`;
    }

    let res = '<table>\n';

    data
        .map(e => {
            let [name, position, salary] = Object.values(JSON.parse(e))
            addOpenTr('tr')
            addContentTag('td', name)
            addContentTag('td', position)
            addContentTag('td', salary)
            addCloseTr('tr')
        });
    res += '</table>';
    return res;
}

console.log(solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']));