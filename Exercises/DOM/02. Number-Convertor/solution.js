const hexMap = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'
}

function solve() {
    let input = document.getElementById('input');
    let menu = document.getElementById('selectMenuTo');
    let myButton = document.getElementsByTagName('button')[0];
    let result = document.getElementById('result');

    if (input === null || menu == null || myButton == null || result == null) {
        throw new Error('Missing element');
    }

    let opt1 = menu.firstElementChild;
    opt1.value = 'binary';
    opt1.innerText = 'Binary';

    let opt2 = document.createElement('option');
    opt2.value = 'hexadecimal';
    opt2.innerText = 'Hexadecimal';
    menu.appendChild(opt2);

    function calculations() {
        let selected = document.getElementById('selectMenuTo').value;
        let res = [];
        let current = input.value;

        if (selected == 'binary') {
            while (current != 0) {
                let quotient = current % 2;
                res.push(quotient);
                current = Math.floor(current / 2);
            }

            result.value = res.reverse().join('');

        } else {
            while (current != 0) {
                let quotient = current % 16;
                res.push(hexMap[quotient]);

                current = Math.floor(current / 16);
            }

            result.value = res.reverse().join('');
        }
    }

    myButton.addEventListener('click', calculations);
}

document.addEventListener('DOMContentLoaded', solve);