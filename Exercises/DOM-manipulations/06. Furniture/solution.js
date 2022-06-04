function solve() {
  const inputElem = document.querySelector('#exercise>textarea');
  const generateBtn = document.querySelector('#exercise>button');
  const tbodyElem = document.querySelector('.table>tbody');
  const resultElem = document.querySelector('#exercise>textarea:nth-of-type(2)');
  const buyBtn = document.querySelector('#exercise>button:nth-of-type(2)');

  if (inputElem == null || generateBtn == null || tbodyElem == null || resultElem == null || buyBtn == null) {
    throw new Error('Missing DOM element!');
  }

  function outputParse(data) {
    let [arr, price, avg] = data;
    return `Bought furniture: ${arr.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${avg / arr.length}`;
  }

  const rowsData = [];

  function createTd(type, content) {
    const parentElem = document.createElement('td');
    const childElem = document.createElement(type);
    const typeMap = {
      'img': (parentElem, childElem, content) => {
        childElem.src = content;
        parentElem.appendChild(childElem);
        return parentElem;
      },
      'input': (parentElem, childElem, content) => {
        childElem.type = content;
        parentElem.appendChild(childElem);
        return parentElem;
      }
    }

    if (typeof typeMap[type] == 'function') {
      typeMap[type](parentElem, childElem, content);
      return parentElem;
    }

    childElem.textContent = content;
    parentElem.appendChild(childElem);
    return parentElem;
  }

  function buyClickHandler() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (checkboxes == null) {
      throw new Error('Missing checkboxes!');
    }

    const data = rowsData.filter(item => item.checkbox.checked).reduce((a, b) => {
      a[0].push(b.name);
      a[1] += Number(b.price);
      a[2] += Number(b.decFactor);

      return a;
    }, [[], 0, 0]);

    resultElem.value = outputParse(data);
  }

  function generateClickHandler() {
    JSON.parse(inputElem.value).forEach(e => {
      const tr = document.createElement('tr');

      const img = createTd('img', e.img)
      const price = createTd('p', e.price);
      const decor = createTd('p', e.decFactor);
      const name = createTd('p', e.name);
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const checkboxTd = document.createElement('td');

      tr.appendChild(img);
      tr.appendChild(name);
      tr.appendChild(price);
      tr.appendChild(decor);
      checkboxTd.appendChild(checkbox);
      tr.appendChild(checkboxTd);

      tbodyElem.appendChild(tr);

      rowsData.push({ ...e, checkbox });
    });
  }

  generateBtn.addEventListener('click', generateClickHandler);
  buyBtn.addEventListener('click', buyClickHandler);
}