function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output')

  if (input == null || output == null) {
    throw new Error('Missing element.');
  }

  let sentences = input.innerHTML
    .split('.')
    .filter(e => e != '');

  for (let i = 0; i < sentences.length; i += 3) {
    let p = document.createElement('p');
    let str = '';

    for (let j = 0; j < 3; j++) {
      if (i + j < sentences.length && sentences[i + j].length > 0) {
        str += sentences[i + j] + '.';
      }

      p.innerHTML = str;
      output.appendChild(p);
    }
  }
}

document.addEventListener('DOMContentLoaded', (x) => {
  document.getElementById("formatItBtn")
    .addEventListener('click', solve)
})