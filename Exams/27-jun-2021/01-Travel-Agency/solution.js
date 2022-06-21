window.addEventListener('load', solution);

function solution() {
  function DOMElementFactory(type, content, attribute) {
    const elem = document.createElement(type);
    if (typeof content == 'string') {
      if (type == 'img') {
        elem.src = content;
      } else {
        elem.textContent = content;
      }
    } else {
      if (Array.isArray(content)) {
        content.forEach(e => elem.appendChild(e));
      } else {
        elem.appendChild(content);
      }
    }
    if (attribute !== undefined) {
      attribute.forEach(([k, v]) => elem[k] = v);
    }

    return elem;
  }
  const nameElem = document.getElementById('fname');
  const emailElem = document.getElementById('email');
  const numberElem = document.getElementById('phone');
  const addressElem = document.getElementById('address');
  const codeElem = document.getElementById('code');
  const submitBtn = document.getElementById('submitBTN');

  const previewUl = document.querySelector('#infoPreview');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  const blockElem = document.getElementById('block');

  const createLi = DOMElementFactory.bind(null, 'li');
  const createH3 = DOMElementFactory.bind(null, 'h3');

  submitBtn.addEventListener('click', function onSubmit(e) {
    e.preventDefault();

    if (nameElem.value != '' && emailElem != '') {
      const nameLi = createLi(`Full Name: ${nameElem.value}`);
      const emailLi = createLi(`Email: ${emailElem.value}`);
      const phoneLi = createLi(`Phone Number: ${numberElem.value}`);
      const addressLi = createLi(`Address: ${addressElem.value}`);
      const codeLi = createLi(`Postal Code: ${codeElem.value}`);

      previewUl.appendChild(nameLi);
      previewUl.appendChild(emailLi);
      previewUl.appendChild(phoneLi);
      previewUl.appendChild(addressLi);
      previewUl.appendChild(codeLi);

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

      nameElem.value = '';
      emailElem.value = '';
      numberElem.value = '';
      addressElem.value = '';
      codeElem.value = '';
    }
  });

  editBtn.addEventListener('click', function onEdit(e) {
    e.preventDefault();
    let [fname, email, phone, address, code] = Array.from(previewUl.children).map(x => x.textContent.split(': ')[1])
    nameElem.value = fname;
    emailElem.value = email;
    numberElem.value = phone;
    addressElem.value = address;
    codeElem.value = code;

    editBtn.disabled = true;
    continueBtn.disabled = true;
    submitBtn.disabled = false;

    previewUl.innerHTML = '';
  });

  continueBtn.addEventListener('click', function onContinue(e) {
    blockElem.innerHTML = '';
    blockElem.appendChild(createH3('Thank you for your reservation!'));
  });
}
