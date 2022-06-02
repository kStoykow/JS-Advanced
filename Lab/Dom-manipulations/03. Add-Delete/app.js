function addItem() {
    let inputElem = document.getElementById('newItemText');
    let ulElem = document.getElementById('items');

    if (inputElem == null || ulElem == null) {
        throw new Error('Missing DOM element!');
    }

    function deleteHandler(e) {
        if (e.target.nodeName == 'A') {
            ulElem.removeChild(e.target.parentElement);
        }
    }

    let li = document.createElement('li');
    let deleteLink = document.createElement('a');
    li.textContent = inputElem.value;
    li.appendChild(deleteLink);
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    ulElem.appendChild(li);

    ulElem.addEventListener('click', deleteHandler);
}