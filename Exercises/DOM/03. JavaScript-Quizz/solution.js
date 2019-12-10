const correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];

function solve() {
  let points = 0;
  let i = 0;

  let sections = document.getElementsByTagName('section');
  let answers = document.getElementsByClassName('answer-text');
  let result = document.getElementById('results');

  if (sections == null || answers == null || result == null) {
    throw new Error('Missing element.');
  }

  function sectionsHandler(evt) {
    if (correctAnswers.includes(evt.target.textContent)) {
      points++;
    }

    let currSection = sections[i];
    currSection.style.display = 'none';

    if (sections[i + 1] != null) {
      let nextSection = sections[i + 1];
      nextSection.style.display = 'block';
      i++;

    } else {
      result.style.display = 'block';
      if (points < 3) {
        result.querySelector('h1').textContent = `You have ${points} right answers`;
      } else {
        result.querySelector('h1').textContent = 'You are recognized as top JavaScript fan!';
      }
    }
  }

  Array.from(answers)
    .map(p => p.addEventListener('click', sectionsHandler))
}

document.addEventListener('DOMContentLoaded', solve)