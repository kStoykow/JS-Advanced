const converterMap = {
    'binary': (x) => (x >>> 0).toString(2),
    'hexadecimal': (x) => ((x) >>> 0).toString(16).toUpperCase()
}
function appendResult(result, x) {
    return result.value = x;
}
function convertCtaHandler(menu, result, input, map) {
    return function () {
        appendResult(result, map[menu.value](input.value));
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

    myButton.addEventListener('click', convertCtaHandler(menu, result, input, converterMap));
}

document.addEventListener('DOMContentLoaded', solve);