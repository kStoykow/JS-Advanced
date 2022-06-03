function solve() {
  let inputElem = document.querySelector('#exercise>textarea');
  let generateBtn = document.querySelector('#exercise>button');
  let tbodyElem = document.querySelector('.table>tbody');
  let resultElem = document.querySelector('#exercise>textarea:nth-of-type(2)');
  let buyBtn = document.querySelector('#exercise>button:nth-of-type(2)');

  if (inputElem == null || generateBtn == null || tbodyElem == null || resultElem == null || buyBtn == null) {
    throw new Error('Missing DOM element!');
  }

  function outputParse(arr, price, avg) {
    return `Bought furniture: ${arr.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${avg / arr.length}`;
  }
  function createAndAppend(parent, child, content) {
    const tagMap = {
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

    let parentElem = document.createElement(parent);
    let childElem = document.createElement(child);

    if (typeof tagMap[child] == 'function') {
      tagMap[child](parentElem, childElem, content);
      return parentElem;
    }

    childElem.textContent = content;
    parentElem.appendChild(childElem);
    return parentElem;
  }
  function buyClickHandler() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    if (checkboxes == null) {
      throw new Error('Missing checkboxes!');
    }

    let purchases = [];
    let price = 0;
    let avgDecFactor = 0;

    Array.from(checkboxes).filter(e => e.checked).forEach(e => {
      let nameElem = e.parentElement.parentElement.children[1];
      let priceElem = e.parentElement.parentElement.children[2];
      let decFactorElem = e.parentElement.parentElement.children[3];

      purchases.push(nameElem.textContent);
      price += Number(priceElem.textContent);
      avgDecFactor += Number(decFactorElem.textContent);
    });

    resultElem.value = outputParse(purchases, price, avgDecFactor);
  }

  function generateClickHandler() {
    JSON.parse(inputElem.value).forEach(x => {
      let tr = document.createElement('tr');

      let img = createAndAppend('td', 'img', x.img)
      tr.appendChild(img);

      let name = createAndAppend('td', 'p', x.name);
      tr.appendChild(name);

      let price = createAndAppend('td', 'p', x.price);
      tr.appendChild(price);

      let decor = createAndAppend('td', 'p', x.decFactor);
      tr.appendChild(decor);

      let checkbox = createAndAppend('td', 'input', 'checkbox');
      tr.appendChild(checkbox);

      tbodyElem.appendChild(tr);
    });
  }

  generateBtn.addEventListener('click', generateClickHandler);
  buyBtn.addEventListener('click', buyClickHandler);
}