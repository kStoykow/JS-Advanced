function extractText() {
    let r = document.getElementById('result');
    let ul = document.getElementById('items');

    return r.textContent = Array.from(ul.textContent).join('').split(/[ ]{3,}/).join('').trim();
}