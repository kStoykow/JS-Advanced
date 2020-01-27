const calc = {
    '+': (a, b) => (Number(a) + Number(b)).toFixed(5),
    '-': (a, b) => (Number(a) - Number(b)).toFixed(5),
    '*': (a, b) => (Number(a) * Number(b)).toFixed(5),
    '/': (a, b) => (Number(a) / Number(b)).toFixed(5),
}

function solve() {
    let keys = Array.from(document.getElementsByClassName('keys'));
    let expression = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let clear = document.querySelector('.clear');

    if (expression === null || resultOutput === null || clearBtnHandler === null || keys === null) {
        throw new Error('Missing element.');
    }

    let x = '';
    let y = '';
    let operand = '';

    function clearBtnHandler() {
        expression.textContent = '';
        resultOutput.textContent = '';
        x = '';
        y = '';
        operand = '';
    }
    function validateOperands(x, y) {
        if (x !== '' && y !== '') {
            return resultOutput.textContent = calc[operand](x, y);
        }
        return resultOutput.textContent = 'NaN';
    }
    function operandsHandler(currKey, operand) {
        if (operand == '') {
            return x += currKey;
        }
        return y += currKey;
    }
    function calcHandler(evt) {
        const currKey = evt.target.value;

        if (isNaN(Number(currKey)) === false || currKey === '.') {
            operandsHandler(currKey, operand);
            expression.textContent += currKey;
        }

        if (typeof calc[currKey] === 'function') {
            operand = currKey;
            expression.textContent += ` ${operand} `;
        }

        if (currKey === '=') {
            validateOperands(x, y);
        }
    }


    clear.addEventListener('click', clearBtnHandler);

    keys.map(key => {
        key.addEventListener('click', calcHandler);
    });
}

document.addEventListener('DOMContentLoaded', solve);