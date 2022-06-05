function solve() {
    let sections = document.querySelectorAll('.wrapper>section');
    let nameElem = document.getElementById('task');
    let descriptionElem = document.getElementById('description');
    let dateElem = document.getElementById('date');
    let addBtn = document.getElementById('add');

    function addTaskHandler(e) {
        e.preventDefault();
        if (nameElem.value !== '' && descriptionElem.value !== '' && dateElem.value !== '') {
            let articleElem = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = nameElem.value;

            let description = document.createElement('p');
            description.textContent = `Description: ${descriptionElem.value}`;

            let date = document.createElement('p');
            date.textContent = `Due Date: ${dateElem.value}`;

            let div = document.createElement('div');
            div.className = 'flex';

            let startBtn = document.createElement('button');
            startBtn.textContent = 'Start'
            startBtn.className = 'green';
            startBtn.addEventListener('click', startHandler);

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete'
            deleteBtn.className = 'red';
            deleteBtn.addEventListener('click', deleteHandler);

            div.appendChild(startBtn);
            div.appendChild(deleteBtn);

            articleElem.appendChild(h3);
            articleElem.appendChild(description);
            articleElem.appendChild(date);
            articleElem.appendChild(div);

            Array.from(sections)[1].children[1].appendChild(articleElem);
        }
    }
    function startHandler(e) {
        let openArticle = e.target.parentElement.parentElement;
        let inProgres = document.getElementById('in-progress');
        inProgres.appendChild(openArticle);
        let btns = openArticle.querySelectorAll('button');
        let [deleteBtn, finishBtn] = btns;

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
        let article = e.target.parentElement.parentElement;
        let parent = article.parentElement;
        parent.removeChild(article);
    }
    function finishHandler(e) {
        let inProgres = e.target.parentElement.parentElement;
        let complete = Array.from(sections)[3].children[1];
        inProgres.removeChild(inProgres.lastElementChild);
        complete.appendChild(inProgres);
    }

    addBtn.addEventListener('click', addTaskHandler);
}