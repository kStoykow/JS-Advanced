isSudomuMap = {
    'true': (table, checkP) => {
        table.style.border = '2px solid green';
        checkP.style.color = 'green';
        checkP.textContent = 'You solve it! Congratulations!';
        return
    },
    'false': (table, checkP) => {
        table.style.border = '2px solid red';
        checkP.style.color = 'red';
        checkP.textContent = 'NOP! You are not done yet...';
        return
    }
}
function checkResultHandler(inputs, table, paragraph) {
    return function () {
        let matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ];

        let isSudomu = true;

        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);

            if ([...new Set(row)].length !== 3 || [...new Set(col)].length !== 3) {
                isSudomu = false;
                break;
            }
        }

        isSudomuMap[isSudomu](table, paragraph);
    }
}
function clearCtaHandler(inputs, paragraph, table) {
    return function () {
        Array.from(inputs).map(x => x.value = '');
        paragraph.textContent = '';
        table.style = 'border: none';
    }
}
function solve() {
    let table = document.querySelector('table');
    let checkP = document.querySelector('#exercise > div#check > p');
    let checkCta = document.querySelector('table > tfoot > tr > td > :nth-child(1)');
    let clearCta = document.querySelector('table > tfoot > tr > td > :nth-child(2)');
    let inputs = document.querySelectorAll('input');

    checkCta.addEventListener('click', checkResultHandler(inputs, table, checkP));
    clearCta.addEventListener('click', clearCtaHandler(inputs, checkP, table));
}