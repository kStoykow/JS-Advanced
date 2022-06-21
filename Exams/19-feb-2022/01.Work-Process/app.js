function solve() {
    const firstNameElem = document.getElementById('fname');
    const lastNameElem = document.getElementById('lname');
    const emailElem = document.getElementById('email');
    const birthElem = document.getElementById('birth');
    const positionElem = document.getElementById('position');
    const salaryElem = document.getElementById('salary');
    const hireBtnElem = document.getElementById('add-worker');
    const tableElem = document.getElementById('tbody');
    const budgetSumElem = document.getElementById('sum');

    hireBtnElem.addEventListener('click', function hireHandler(e) {
        e.preventDefault();
        let fname = firstNameElem.value;
        let lname = lastNameElem.value;
        let email = emailElem.value;
        let birth = birthElem.value;
        let position = positionElem.value;
        let salary = salaryElem.value;

        if (fname != '' && lname != '' && email != '' && birth != '' && position != '' && salary != '') {
            let tr = document.createElement('tr');

            let nameTd = document.createElement('td');
            let lastNameTd = document.createElement('td');
            let emailTd = document.createElement('td');
            let birthTd = document.createElement('td');
            let positionTd = document.createElement('td');
            let salaryTd = document.createElement('td');
            let buttonsTd = document.createElement('td');

            let FiredBtn = document.createElement('button');
            let editBtn = document.createElement('button');

            FiredBtn.classList.add('fired');
            FiredBtn.textContent = 'Fired';

            editBtn.classList.add('edit');
            editBtn.textContent = 'Edit';

            editBtn.addEventListener('click', function editHandler(e) {
                firstNameElem.value = fname;
                lastNameElem.value = lname;
                emailElem.value = email;
                birthElem.value = birth;
                positionElem.value = position;
                salaryElem.value = salary;

                let currSum = Number(budgetSumElem.textContent);
                budgetSumElem.textContent = (currSum - Number(salary)).toFixed(2);

                tr.remove();
            });
            FiredBtn.addEventListener('click', function fireHandler(e) {
                let currSum = Number(budgetSumElem.textContent);
                budgetSumElem.textContent = (currSum - Number(salary)).toFixed(2);
                tr.remove();
            });

            buttonsTd.appendChild(FiredBtn);
            buttonsTd.appendChild(editBtn);

            nameTd.textContent = fname;
            lastNameTd.textContent = lname;
            emailTd.textContent = email;
            birthTd.textContent = birth;
            positionTd.textContent = position;
            salaryTd.textContent = salary;

            firstNameElem.value = '';
            lastNameElem.value = '';
            emailElem.value = '';
            birthElem.value = '';
            positionElem.value = '';
            salaryElem.value = '';

            let currSum = Number(budgetSumElem.textContent);
            budgetSumElem.textContent = (currSum + Number(salary)).toFixed(2);

            tr.appendChild(nameTd);
            tr.appendChild(lastNameTd);
            tr.appendChild(emailTd);
            tr.appendChild(birthTd);
            tr.appendChild(positionTd);
            tr.appendChild(salaryTd);
            tr.appendChild(buttonsTd);

            tableElem.appendChild(tr);
        }
    });
}
solve()