function solve() {
    const [checkBtn, clearBtn] = Array.from(document.querySelectorAll('#exercise>table>tfoot button'));
    const resultElem = document.querySelector('#check>p');
    const tableElem = document.querySelector('table');
    const tbodyElem = document.querySelector('tbody');

    function isValidLine(tr) {
        const arr = Array.from(tr.children).map(e => e.children[0].value);
        const unique = new Set(arr);
        if (unique.size === 3) {
            return true;
        }
        return false;
    }
    function isValidColumn(arrOfRows) {
        for (let i = 0; i < arrOfRows[0].children.length; i++) {
            const curr = arrOfRows.map(e => Array.from(e.children)[i]).map(td => td.children[0].value);
            const unique = new Set(curr);
            if (unique.size !== 3) {
                return false;
            }
        }
        return true;
    }

    function checkHandler() {
        const isValidRow = Array.from(tbodyElem.children).map(isValidLine).every(e => e == true);

        if (isValidRow == true && isValidColumn(Array.from(tbodyElem.children)) == true) {
            tableElem.style.border = '2px solid green';
            resultElem.textContent = 'You solve it! Congratulations!';
            resultElem.style.color = 'green';
        } else {
            tableElem.style.border = '2px solid red';
            resultElem.textContent = 'NOP! You are not done yet...';
            resultElem.style.color = 'red';
        }
    }

    function clearHandler() {
        const tdElements = document.querySelectorAll('tbody td');
        Array.from(tdElements).map(e => e.children[0].value = '');
        tableElem.style.border = 'none';
        resultElem.textContent = '';
    }

    checkBtn.addEventListener('click', checkHandler);
    clearBtn.addEventListener('click', clearHandler);
}