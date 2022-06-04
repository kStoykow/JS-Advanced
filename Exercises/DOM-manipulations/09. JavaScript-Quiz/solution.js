function solve() {
  const sectionElements = document.querySelectorAll('#quizzie section');
  const resultElem = document.querySelector('.results-inner>h1');

  if (sectionElements == null || resultElem == null) {
    throw new Error('Missing DOM elements!');
  }

  const answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let answersCount = 0;

  function clickHandler(e) {
    if (e.target.className == 'answer-text') {
      if (answers.includes(e.target.textContent) == true) {
        answersCount += 1;
      }
      e.currentTarget.style.display = 'none';

      if (e.currentTarget.nextElementSibling != null) {
        e.currentTarget.nextElementSibling.style.display = 'block';
      }

      if (e.currentTarget.nextElementSibling.id == 'results') {
        if (answersCount == answers.length) {
          resultElem.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          resultElem.textContent = `You have ${answersCount} right answers`;
        }
      }
    }
  }

  Array.from(sectionElements).forEach(e => e.addEventListener('click', clickHandler));
}