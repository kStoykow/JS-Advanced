function solve() {
    const sections = document.querySelectorAll('.wrapper>section');
    const nameElem = document.getElementById('task');
    const descriptionElem = document.getElementById('description');
    const dateElem = document.getElementById('date');
    const addBtn = document.getElementById('add');

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

    const createArticle = DOMElementFactory.bind(null, 'article');
    const createH3 = DOMElementFactory.bind(null, 'h3');
    const createP = DOMElementFactory.bind(null, 'p');
    const createDiv = DOMElementFactory.bind(null, 'div');
    const createButton = DOMElementFactory.bind(null, 'button');

    function addTaskHandler(e) {
        e.preventDefault();
        if (nameElem.value !== '' && descriptionElem.value !== '' && dateElem.value !== '') {

            const h3 = createH3(`${nameElem.value}`);
            const description = createP(`Description: ${descriptionElem.value}`);
            const date = createP(`Due Date: ${dateElem.value}`);

            const startBtn = createButton('Start', [['className', 'green']]);
            startBtn.addEventListener('click', startHandler);
            const deleteBtn = createButton('Delete', [['className', 'red']]);
            deleteBtn.addEventListener('click', deleteHandler);

            const div = createDiv([
                startBtn,
                deleteBtn
            ], [['className', 'flex']]);

            const articleElem = createArticle([h3, description, date, div]);

            Array.from(sections)[1].children[1].appendChild(articleElem);
        }
    }
    function startHandler(e) {
        const openArticle = e.target.parentElement.parentElement;
        const inProgres = document.getElementById('in-progress');
        inProgres.appendChild(openArticle);
        const btns = openArticle.querySelectorAll('button');
        const [deleteBtn, finishBtn] = btns;

        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'red';
        deleteBtn.removeEventListener('click', startHandler);
        deleteBtn.addEventListener('click', deleteHandler);

        finishBtn.textContent = 'Finish';
        finishBtn.className = 'orange';
        finishBtn.removeEventListener('click', deleteHandler);
        finishBtn.addEventListener('click', finishHandler);
    }
    function deleteHandler(e) {
        const article = e.target.parentElement.parentElement;
        const parent = article.parentElement;
        parent.removeChild(article);
    }
    function finishHandler(e) {
        const inProgres = e.target.parentElement.parentElement;
        const complete = Array.from(sections)[3].children[1];
        inProgres.removeChild(inProgres.lastElementChild);
        complete.appendChild(inProgres);
    }

    addBtn.addEventListener('click', addTaskHandler);
}