function deleteByEmail() {
    let emailsElem = document.querySelectorAll('tbody>tr>td:nth-child(2)');
    let inputElem = document.querySelector('label>input');
    let resultElem = document.getElementById('result');

    if (emailsElem == null || inputElem == null || resultElem == null) {
        throw new Error('Missing DOM element');
    }

    let emailsData = Array.from(emailsElem).map(e => e.textContent);
    if (emailsData.includes(inputElem.value)) {
        let i = emailsData.indexOf(inputElem.value);
        // emailsElem[i].parentElement.remove();
        document.getElementById('customers').deleteRow(i + 1); // escaping header row
        resultElem.textContent = 'Deleted.';

    } else {
        resultElem.textContent = 'Not found.';
    }
}