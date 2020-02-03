const calcMap = {
    '+': (a, b) => (Number(a) + Number(b)).toFixed(5),
    '-': (a, b) => (Number(a) - Number(b)).toFixed(5),
    '*': (a, b) => (Number(a) * Number(b)).toFixed(5),
    '/': (a, b) => (Number(a) / Number(b)).toFixed(5),
}
let leftOperand = '';
let rightOperand = '';
let operator = '';

function clearBtnHandler(expression, resultOutput) {
    return function () {
        expression.textContent = '';
        resultOutput.textContent = '';
        leftOperand = '';
        rightOperand = '';
        operator = '';
    }
}
function validateOperands(x, y, resultOutput) {
    if (x !== '' && y !== '') {
        return resultOutput.textContent = calcMap[operator](x, y);
    }
    return resultOutput.textContent = 'NaN';
}
function calcHandler(expression, calc, resultOutput) {
    return function (evt) {
        const currKey = evt.target.value;

        if (isNaN(Number(currKey)) === false || currKey === '.') {
            operatorsHandler(currKey, operator);
            expression.textContent += currKey;
        }

        if (typeof calc[currKey] === 'function') {
            operator = currKey;
            expression.textContent += ` ${operator} `;
        }

        if (currKey === '=') {
            validateOperands(leftOperand, rightOperand, resultOutput);
        }
    }
}
function operatorsHandler(currKey, operand) {
    if (operand === '') {
        return leftOperand += currKey;
    }
    return rightOperand += currKey;
}


function solve() {
    let keys = Array.from(document.getElementsByClassName('keys'));
    let expression = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let clear = document.querySelector('.clear');

    if (expression === null || resultOutput === null || clearBtnHandler === null || keys === null) {
        throw new Error('Missing element.');
    }

    clear.addEventListener('click', clearBtnHandler(expression, resultOutput));

    keys.map(key => {
        key.addEventListener('click', calcHandler(expression, calcMap, resultOutput));
    });
}

document.addEventListener('DOMContentLoaded', solve);