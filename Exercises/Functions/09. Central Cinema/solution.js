function solve() {
    const movieNameElem = document.querySelector('#container :nth-child(1)');
    const moiveHallElem = document.querySelector('#container :nth-child(2)');
    const moviePriceElem = document.querySelector('#container :nth-child(3)');
    const onScreenBtn = document.querySelector('#container button');

    const moviesOnScreenUlElem = document.querySelector('#movies ul');
    const archivedMoviesUlElem = document.querySelector('#archive ul');
    const clearArchiveBtn = document.querySelector('#archive button');

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
            } else {
                elem.appendChild(content);
            }
        }
        if (attribute !== undefined) {
            attribute.forEach(([k, v]) => elem[k] = v);
        }

        return elem;
    }

    const createLi = DOMElementFactory.bind(null, 'li');
    const createSpan = DOMElementFactory.bind(null, 'span');
    const createStrong = DOMElementFactory.bind(null, 'strong');
    const createDiv = DOMElementFactory.bind(null, 'div');
    const createInput = DOMElementFactory.bind(null, 'input');
    const createButton = DOMElementFactory.bind(null, 'button');

    function isValidMovie(name, hall, price) {
        if (name != '' && hall != '' && price != '' && isNaN(Number(price)) == false) {
            return true;
        }
        return false;
    }
    function addHandler(e) {
        e.preventDefault();
        if (isValidMovie(movieNameElem.value, moiveHallElem.value, moviePriceElem.value)) {
            const spanName = createSpan(`${movieNameElem.value}`);
            const strongHall = createStrong(`Hall: ${moiveHallElem.value}`);
            const strongPrice = createStrong(`${Number(moviePriceElem.value).toFixed(2)}`);
            const inputPlaceholder = createInput('', [['placeholder', 'Tickets Sold']]);
            const button = createButton('Archive');
            button.addEventListener('click', archiveHandler);

            const divPrice = createDiv([strongPrice, inputPlaceholder, button]);
            const li = createLi([spanName, strongHall, divPrice]);
            moviesOnScreenUlElem.appendChild(li);

            movieNameElem.value = '';
            moiveHallElem.value = '';
            moviePriceElem.value = '';
        }

    }
    function archiveHandler(e) {
        const liElem = e.target.parentElement.parentElement;
        const divElem = e.target.parentElement;

        const movieNameElem = liElem.querySelector('span');
        const priceElem = divElem.querySelector('strong');
        const inputElem = divElem.querySelector('input');

        if (inputElem.value != '' && isNaN(Number(inputElem.value)) == false) {
            const spanName = createSpan(`${movieNameElem.textContent}`);
            const strongTotal = createStrong(`Total amount: ${(Number(priceElem.textContent) * Number(inputElem.value)).toFixed(2)}`);
            const button = createButton('Delete');
            button.addEventListener('click', deleteHandler);
            const li = createLi([spanName, strongTotal, button]);

            archivedMoviesUlElem.appendChild(li);
            inputElem.value = '';
        }

    }
    function deleteHandler(e) {
        archivedMoviesUlElem.removeChild(e.target.parentElement);
    }
    function clearHandler() {
        const ul = document.querySelector('#archive ul');

        Array.from(ul.children).map(e => ul.removeChild(e));
    }

    clearArchiveBtn.addEventListener('click', clearHandler);
    onScreenBtn.addEventListener('click', addHandler);
}