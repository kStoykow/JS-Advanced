function solve() {
    let selectToElement = document.getElementById('selectMenuTo');
    let btn = document.querySelector('button');
    let inputElem = document.getElementById('input');
    let outputElem = document.getElementById('result');

    if (selectToElement == null || btn == null || inputElem == null || outputElem == null) {
        throw new Error('Missing DOM Element!');
    }

    let decimalOption = document.createElement('option');
    selectToElement.children[0].textContent = 'Binary';
    selectToElement.children[0].value = 'binary';
    decimalOption.textContent = 'Hexadecimal';
    decimalOption.value = 'hexadecimal';
    selectToElement.appendChild(decimalOption);

    function clickHandler() {
        const numberConverterMap = {
            binary: (x) => (Number(x) >>> 0).toString(2),
            hexadecimal: (x) => Number(x).toString(16).toUpperCase(),
        }

        outputElem.value = numberConverterMap[selectToElement.value](inputElem.value);
    }

    btn.addEventListener('click', clickHandler);
}