function solve() {
  let input = document.getElementById('input');
  let btn = document.getElementById('formatItBtn');
  let output = document.getElementById('output');

  if (input == null || btn == null || output == null) {
    throw new Error('Missing DOM element!');
  }

  function appendChildToParent(parent, children) {
    return parent.appendChild(children);
  }
  function createHtmlElem(e, content) {
    let elem = document.createElement(`${e}`);
    elem.textContent = content;
    return elem;
  }

  const createP = createHtmlElem.bind(undefined, 'p');

  let text = input.value;

  let rawSentences = text.split('.').map(e => e + '.');
  let sentences = rawSentences.slice(0, rawSentences.length - 1).map(e => e.trim());

  sentences.reduce((agg, elem, i) => {
    if (i % 3 == 0 && i != 0) {
      appendChildToParent(output, createP(agg));
      agg = '';
    }

    agg += elem;
    if (i == sentences.length - 1) {
      appendChildToParent(output, createP(agg));
      agg = '';
    }
    return agg;
  }, '');
}