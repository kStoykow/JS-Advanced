let colorsMap = ['blue', 'green', 'red'];
let state = 0;

function growingWord() {
  let growingWord = document.querySelector('#exercise p');

  if (growingWord == null) {
    throw new Error('Missing element');
  }

  growingWord.style.color = colorsMap[state];
  state++;

  if (state >= colorsMap.length) {
    state = 0;
  }

  let fontSize = growingWord.style.fontSize;

  if (fontSize === "") {
    growingWord.style.fontSize = '2px';
    fontSize = '2px';
  } else {
    fontSize = Number(fontSize.replace('px', '')) * 2
    growingWord.style.fontSize = `${fontSize}px`;
  }
}

document.addEventListener('DOMContentLoaded', (x) => {
  document
    .getElementById('CTA')
    .addEventListener('click', growingWord)
})