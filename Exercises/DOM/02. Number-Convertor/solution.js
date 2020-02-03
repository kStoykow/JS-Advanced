function appendResult(result, x) {
    return result.value = x;
}
function convertBinary(num) {
    return (num >>> 0).toString(2);
}
function convertHexadecimal(num) {
    return ((num) >>> 0).toString(16).toUpperCase();
}
function convertCtaHandler(menu, result, input) {
    return function () {
        if (menu.value === 'binary') {
            appendResult(result, convertBinary(input.value));
        } else {
            appendResult(result, convertHexadecimal(input.value));
        }
    }
}

function solve() {
    let input = document.getElementById('input');
    let menu = document.getElementById('selectMenuTo');
    let myButton = document.getElementsByTagName('button')[0];
    let result = document.getElementById('result');

    if (input === null || menu == null || myButton == null || result == null) {
        throw new Error('Missing element');
    }

    menu.firstElementChild.value = 'binary';
    menu.firstElementChild.innerText = 'Binary';

    let opt2 = document.createElement('option');
    opt2.value = 'hexadecimal';
    opt2.innerText = 'Hexadecimal';
    menu.appendChild(opt2);

    myButton.addEventListener('click', convertCtaHandler(menu, result, input));
}

document.addEventListener('DOMContentLoaded', solve);