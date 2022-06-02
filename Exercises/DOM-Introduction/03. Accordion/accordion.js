function toggle() {
    let btn = document.querySelector('.head .button');
    let toShow = document.querySelector('#extra');

    if (btn == null || toShow == null) {
        throw new Error('Missing DOM element!');
    }

    if (btn.textContent == 'More') {
        btn.textContent = 'Less';
        toShow.style.display = 'block';
    } else {
        btn.textContent = 'More';
        toShow.style.display = 'none';
    }
}