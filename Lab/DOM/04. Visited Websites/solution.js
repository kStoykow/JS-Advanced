function solve() {
  let links = document.querySelectorAll('.list-1');

  document.addEventListener('click', (e) => {
    if (e.target.parentNode.parentNode.classList.contains('link-1')) {
      let textContent = e.target.parentNode.parentNode.contains('p').innerText;
      let text = textContent.split(/\d+/g);
      let count = Number(textContent.match(/\d+/g)[0]);

      e.target.parentNode.parentNode.querySelector('p').innerText = text.join(`${count + 1}`)
    }

  })
}