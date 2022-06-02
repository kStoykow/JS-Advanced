function solve() {
  let text = document.getElementById('text');
  let namingCase = document.getElementById('naming-convention');
  let r = document.getElementById('result');

  const caseMap = {
    'Camel Case': (x) => {
      let words = x.split(' ').map(e => e.toLocaleLowerCase());
      return words.map((e, i) => i == 0 ? e : e[0].toLocaleUpperCase() + e.substring(1)).join('');
    },
    'Pascal Case': (x) => {
      let words = x.split(' ').map(e => e.toLocaleLowerCase());
      return words.map((e) => e[0].toLocaleUpperCase() + e.substring(1)).join('');
    },
  }

  if (text == null || namingCase == null || r == null) {
    throw new Error('Missing DOM element.');
  }

  if (typeof caseMap[namingCase.value] == 'function') {
    return r.textContent = caseMap[namingCase.value](text.value);
  }

  return r.textContent = 'Error!';
}