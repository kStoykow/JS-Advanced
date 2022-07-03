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
            content.forEach(e => {
                if (typeof e == 'string') {
                    elem.textContent = e;
                } else {
                    elem.appendChild(e)
                }
            });
        } else {
            elem.appendChild(content);
        }
    }
    if (attribute !== undefined) {
        attribute.forEach(([k, v]) => {
            if (k.includes('on')) {
                const event = k.split('on')[1].toLocaleLowerCase();
                elem.addEventListener(event, v);
            } else {
                elem[k] = v
            }
        });
    }

    return elem;
}