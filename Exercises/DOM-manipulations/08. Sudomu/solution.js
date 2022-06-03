function solve() {
    let [checkBtn, clearBtn] = document.querySelectorAll('#exercise>table>tfoot button');
    let resultElem = document.querySelector('#check>p');
    let tableElem = document.getElementsByTagName('table')[0];
    let tbodyElem = document.getElementsByTagName('tbody')[0];

    function isValidLine(tr) {
        let arr = Array.from(tr.children).map(e => e.children[0].value);
        let unique = new Set(arr);
        if (unique.size === 3) {
            return true;
        }
        return false;
    }
    function isValidColumn(arrOfRows) {
        for (let i = 0; i < arrOfRows[0].children.length; i++) {
            let curr = arrOfRows.map(e => Array.from(e.children)[i]).map(td => td.children[0].value);
            let unique = new Set(curr);
            if (unique.size !== 3) {
                return false;
            }
        }
        return true;
    }

    function checkHandler() {
        let isValidRow = Array.from(tbodyElem.children).map(tr => isValidLine(tr)).every(e => e == true);

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
        let tdElements = document.querySelectorAll('tbody td');
        Array.from(tdElements).map(e => e.children[0].value = '');
        tableElem.style.border = 'none';
        resultElem.textContent = '';
    }

    checkBtn.addEventListener('click', checkHandler);
    clearBtn.addEventListener('click', clearHandler);
}