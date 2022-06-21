function result() {
    let [addToListBtn, resetBtn] = Array.from(document.querySelector('.action').children);

    let emailInput = document.getElementById('recipientName');
    let titleInput = document.getElementById('title');
    let textareaInput = document.getElementById('message');
    let emailsUlDiv = document.getElementById('list');
    let sentEmailsUlDiv = document.querySelector('.sent-list');
    let deletedEmailsUl = document.querySelector('.delete-list');

    function resetHandler(e) {
        e.preventDefault();
        emailInput.value = '';
        titleInput.value = '';
        textareaInput.value = '';
    }

    function sendEmailFromList(e) {
        e.preventDefault();
        let liInfoElem = e.target.parentElement.parentElement;

        let li = document.createElement('li');
        let spanTo = document.createElement('span');
        spanTo.textContent = `To: ${liInfoElem.children[1].textContent.split(': ')[1]}`;

        let spanTitle = document.createElement('span');
        spanTitle.textContent = liInfoElem.children[0].textContent;

        let divBtns = document.createElement('div');
        divBtns.classList.add('btn');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.type = 'submit';

        deleteBtn.addEventListener('click', deleteBtnHandler);
        divBtns.appendChild(deleteBtn);

        li.appendChild(spanTo);
        li.appendChild(spanTitle);
        li.appendChild(divBtns);

        sentEmailsUlDiv.appendChild(li);

        emailsUlDiv.removeChild(liInfoElem);
    }

    function deleteBtnHandler(e) {
        e.preventDefault();
        let liParentElem = e.target.parentElement.parentElement;

        let li = document.createElement('li');
        let spanTo = document.createElement('span');
        let spanTitle = document.createElement('span');

        if (e.target.id == 'delete') {
            spanTo.textContent = `To: ${liParentElem.children[1].textContent.split(': ')[1]}`;
            spanTitle.textContent = liParentElem.children[0].textContent;
            emailsUlDiv.removeChild(liParentElem);
        } else {
            spanTo.textContent = liParentElem.children[0].textContent;
            spanTitle.textContent = liParentElem.children[1].textContent;
            sentEmailsUlDiv.removeChild(liParentElem);

        }

        li.appendChild(spanTo);
        li.appendChild(spanTitle);
        deletedEmailsUl.appendChild(li);
    }

    function addToListHandler(e) {
        e.preventDefault();
        if (emailInput.value != '' && titleInput.value != '' && textareaInput.value != '') {
            let li = document.createElement('li');
            let titleElem = document.createElement('h4');
            let emailElem = document.createElement('h4');
            let emailTextarea = document.createElement('span');

            titleElem.textContent = `Title: ${titleInput.value}`;
            emailElem.textContent = `Recipient Name: ${emailInput.value}`;
            emailTextarea.textContent = textareaInput.value;

            let btnsElem = document.createElement('div');
            btnsElem.id = 'list-actions';

            let sendBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');
            sendBtn.textContent = 'Send';
            sendBtn.type = 'submit';
            sendBtn.id = 'send';

            deleteBtn.textContent = 'Delete';
            deleteBtn.type = 'submit';
            deleteBtn.id = 'delete';

            sendBtn.addEventListener('click', sendEmailFromList);
            deleteBtn.addEventListener('click', deleteBtnHandler);

            btnsElem.appendChild(sendBtn);
            btnsElem.appendChild(deleteBtn);

            li.appendChild(titleElem);
            li.appendChild(emailElem);
            li.appendChild(emailTextarea);
            li.appendChild(btnsElem);
            emailsUlDiv.appendChild(li);

            emailInput.value = '';
            titleInput.value = '';
            textareaInput.value = '';
        }
    }

    addToListBtn.addEventListener('click', addToListHandler);
    resetBtn.addEventListener('click', resetHandler);
}

result();