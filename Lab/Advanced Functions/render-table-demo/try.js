import { MOCK } from "./MOCK_DATA.js";

(function (data, document) {
    const keys = Object.keys(data[0]);

    function createTag(tag, content) {
        return `<${tag}>
    ${Array.isArray(content) ? content.join('') : content}
</${tag}>`;
    }

    function createSingleTag(tag, prop, val) {
        return `<${tag} ${prop}="${val}"/>`;
    }

    const renderTable = createTag.bind(undefined, 'table');
    const renderThead = createTag.bind(undefined, 'thead');
    const renderTbody = createTag.bind(undefined, 'tbody');
    const renderTr = createTag.bind(undefined, 'tr');
    const renderTh = createTag.bind(undefined, 'th');
    const renderTd = createTag.bind(undefined, 'td');
    const renderUl = createTag.bind(undefined, 'ul');
    const renderLi = createTag.bind(undefined, 'li');

    const fieldsMap = {
        avatar: (x) => createSingleTag('img', 'src', x),
        friends: (list) => renderUl(list.map(f => renderLi(`${f.first_name} ${f.last_name}`))),
        email: (x) => `<a href="mailto:${x}">${x}</a>`,
    }

    const dict = {
        id: "Идент.",
        email: "Мейл",
        gender: "Пол",
        ip_address: "IP",
        first_name: "Име",
        avatar: "Картинка",
        friends: "Приятели",
        last_name: "Фамилия"
    }

    function chooseContentType(map, defoultWrapper, type, content) {
        if (typeof map[type] == 'function') {
            return defoultWrapper(map[type](content));
        }
        return defoultWrapper(content);
    }

    const defoultTd = chooseContentType.bind(undefined, fieldsMap, renderTd);

    let r = renderTable(
        renderThead(renderTr(keys.map(key => renderTh(dict[key])))) +
        renderTbody(data.map(row => renderTr(keys.map(elem => defoultTd(elem, row[elem])))))
    );



    document.getElementById("arr").innerHTML = r;
}(MOCK.slice(0, 20), document))