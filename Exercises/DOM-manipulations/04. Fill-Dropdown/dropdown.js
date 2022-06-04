function addItem() {
    const selectElem = document.getElementById('menu');
    const textElem = document.getElementById('newItemText');
    const valElem = document.getElementById('newItemValue');
    const btn = document.querySelector('input[type="button"]');

    if (selectElem == null || textElem == null || valElem == null || btn == null) {
        throw new Error('Missing DOM element!');
    }

    const option = document.createElement('option');
    option.value = valElem.value;
    option.textContent = textElem.value;
    selectElem.appendChild(option);
    textElem.value = '';
    valElem.value = '';
}