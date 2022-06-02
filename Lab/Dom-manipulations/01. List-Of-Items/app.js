function addItem() {
    let inputElem = document.getElementById('newItemText');
    let ulElem = document.getElementById('items');

    if (inputElem == null || ulElem == null) {
        throw new Error('Missing DOM element!');
    }

    let li = document.createElement('li');
    li.innerText = inputElem.value;
    ulElem.appendChild(li);
}