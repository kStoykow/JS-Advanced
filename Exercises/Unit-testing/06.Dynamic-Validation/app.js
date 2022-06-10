function validate() {
    let inputElem = document.getElementById('email');
    let validatePattern = /[a-z]+@[a-z]+\.[a-z]+/;

    inputElem.addEventListener('change', () => {
        if (inputElem.value.match(validatePattern) == null) {
            inputElem.classList.add('error');
        } else {
            inputElem.classList.remove('error');
        }
    });
}