const correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
const pointsMap = {
  'true': (result, points) => result.querySelector('h1').textContent = `You have ${points} right answers`,
  'false': (result, _) => result.querySelector('h1').textContent = 'You are recognized as top JavaScript fan!'
}
const sectionsMap = {
  'true': (_, sections, pointsMap) => {
    sections[i].style.display = 'none';
    sections[i + 1].style.display = 'block';
    return i++;
  },

  'false': (result, sections, pointsMap) => {
    sections[i].style.display = 'none';
    result.style.display = 'block';
    return pointsMap[points < 3](result, points);
  }
}
function sectionsHandler(sections, result, sectionsMap, correctAnswers) {
  return function (evt) {
    if (correctAnswers.includes(evt.target.textContent)) {
      points++;
    }

    sectionsMap[sections[i + 1] != null](result, sections, pointsMap);
  }
}

let points = 0;
let i = 0;

function solve() {
  let sections = Array.from(document.getElementsByTagName('section'));
  let answers = document.getElementsByClassName('answer-text');
  let result = document.getElementById('results');

  if (sections == null || answers == null || result == null) {
    throw new Error('Missing element.');
  }

  Array.from(answers)
    .map(p => p.addEventListener('click', sectionsHandler(sections, result, sectionsMap, correctAnswers)))
}

document.addEventListener('DOMContentLoaded', solve);