function addItem() {
    let selectElem = document.getElementById('menu');
    let textElem = document.getElementById('newItemText');
    let valElem = document.getElementById('newItemValue');
    let btn = document.querySelector('input[type="button"]');

    if (selectElem == null || textElem == null || valElem == null || btn == null) {
        throw new Error('Missing DOM element!');
    }

    let option = document.createElement('option');
    option.value = valElem.value;
    option.textContent = textElem.value;
    selectElem.appendChild(option);
    textElem.value = '';
    valElem.value = '';
}