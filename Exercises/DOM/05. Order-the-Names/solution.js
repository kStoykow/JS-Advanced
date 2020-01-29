"use strict";
function clickHandler(input, list) {
    return function CTAHandler() {
        let listIndex = input.value[0].toUpperCase().charCodeAt(0) - 65;
        let name = input.value.toUpperCase()[0] + input.value.substring(1).toLowerCase();

        checkIfNameExisting(name, listIndex, list);
    }
}
function checkIfNameExisting(name, i, list) {
    if (list[i].textContent.length > 0) {
        return list[i].textContent += `, ${name}`;
    }
    return list[i].textContent = name;
}

function solve() {
    let input = document.querySelector('article input');
    let button = document.querySelector('article button');
    let list = document.querySelector('div ol').querySelectorAll('li');

    if (input === null || button === null || list === null) {
        throw new Error('Missing element.');
    }

    button.addEventListener('click', clickHandler(input, list, checkIfNameExisting));
}
document.addEventListener('DOMContentLoaded', solve);