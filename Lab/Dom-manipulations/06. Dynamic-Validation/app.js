function validate() {
    let inputElem = document.getElementById('email');

    if (inputElem == null) {
        throw new Error('Missing input element');
    }

    let pattern = /[a-z]+@[a-z]+.[a-z]+/;

    function validatorHandler() {
        if (inputElem.value.match(pattern)) {
            inputElem.className = '';
        } else {
            inputElem.className = 'error';
        }
    }
    
    inputElem.addEventListener('change', validatorHandler);
}