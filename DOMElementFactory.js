function DOMElementFactory(type, content, attribute) {
    const elem = document.createElement(type);

    if (typeof content == 'string') {
        if (type == 'img') {
            elem.src = content;
        } else {
            elem.textContent = content;
        }

    } else {
        if (Array.isArray(content)) {
            content.forEach(e => elem.appendChild(e));
        }
    }
    if (attribute !== undefined) {
        attribute.forEach(([k, v]) => elem[k] = v);
    }

    return elem;
}