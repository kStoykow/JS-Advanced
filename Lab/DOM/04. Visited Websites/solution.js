const linksState = {
  'Google': 2,
  'SoftUni': 1,
  'YouTube': 4,
  'Wikipedia': 4,
  'Gmail': 7,
  'stackoverflow': 6,
}

const template = (x) => `visited ${x} times`;

document.addEventListener('click', (evt) => {
  if (evt.target == null || !evt.target.classList || !evt.target.classList.contains('linkCta')) {
    throw new Error('Missing element.')
  }

  if (evt.target.parentNode == null) {
    throw new Error('Missing element.');
  }

  evt.target.parentNode.querySelector('.visits')
    .innerHTML = template(linksState[evt.target.textContent.trim()] += 1);
})