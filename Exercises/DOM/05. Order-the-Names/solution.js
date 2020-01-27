"use strict";
function solve() {
    let input = document.querySelector('article input');
    let button = document.querySelector('article button');
    let ol = document.querySelector('div ol');
    let list = Array.from(ol.getElementsByTagName('li'));

    if (input === null || ol === null || button === null || list === null) {
        throw new Error('Missing element.');
    }

    function checkIfNameExisting(name, i) {
        if (list[i].textContent.length !== 0) {
            return list[i].textContent += `, ${name}`;
        }
        return list[i].textContent = name;
    }

    function CTAHandler() {
        let listIndex = input.value[0].toUpperCase().charCodeAt(0) - 65;
        let name = input.value.toUpperCase()[0] + input.value.substring(1).toLowerCase();

        checkIfNameExisting(name, listIndex);
    }

    button.addEventListener('click', CTAHandler);
}
 document.addEventListener('DOMContentLoaded', solve);