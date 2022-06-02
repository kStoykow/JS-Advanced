function focused() {
    let divElem = document.querySelector('div');

    if (divElem == null) {
        throw new Error('Missing DOM element');
    }

    function focusHandler(e) {
        if (e.target != null && e.target.nodeName == 'INPUT') {
            e.target.parentNode.className = 'focused';
        }
    }

    function blurHandler(e) {
        e.target.parentNode.className = '';
    }

    divElem.addEventListener('focus', focusHandler, true);
    divElem.addEventListener('blur', blurHandler, true);
}