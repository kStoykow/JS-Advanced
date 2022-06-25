window.addEventListener("load", solve);

function solve() {
  function DOMElementFactory(type, content, attribute) {
    const elem = document.createElement(type);

    if (typeof content == 'string') {
      if (type == 'img') {
        elem.src = content;
      } else {
        elem.textContent = content;
      }

    } else {
      if (Array.isArray(content)) {
        content.forEach(e => elem.appendChild(e));
      }
    }
    if (attribute !== undefined) {
      attribute.forEach(([k, v]) => elem[k] = v);
    }

    return elem;
  }

  const createSpan = DOMElementFactory.bind(null, 'span');
  const createLi = DOMElementFactory.bind(null, 'li');
  const createBtn = DOMElementFactory.bind(null, 'button');
  const createTr = DOMElementFactory.bind(null, 'tr');
  const createTd = DOMElementFactory.bind(null, 'td');

  const makeElem = document.getElementById('make');
  const modelElem = document.getElementById('model');
  const yearElem = document.getElementById('year');
  const fuelSelectElem = document.getElementById('fuel');
  const originalCostElem = document.getElementById('original-cost');
  const sellingPriceElem = document.getElementById('selling-price');
  const publishBtn = document.getElementById('publish');
  const tableBody = document.getElementById('table-body');
  const carsList = document.getElementById('cars-list');
  const profitElem = document.getElementById('profit');

  publishBtn.addEventListener('click', function onPublish(e) {
    e.preventDefault();
    if (makeElem.value != '' && modelElem.value != '' && yearElem.value != '' &&
      fuelSelectElem.value != '' && originalCostElem.value != '' && sellingPriceElem.value != '' &&
      originalCostElem.value <= sellingPriceElem.value) {

      const editBtn = createBtn('Edit', [['className', 'action-btn edit']]);
      const sellBtn = createBtn('Sell', [['className', 'action-btn sell']]);

      editBtn.addEventListener('click', function onEdit(e) {
        const row = e.target.parentElement.parentElement;
        let indexOf = Array.from(tableBody.children).indexOf(row);
        const data = Array.from(tableBody.children[indexOf].children).map(e => e.textContent);

        makeElem.value = data[0];
        modelElem.value = data[1];
        yearElem.value = data[2];
        fuelSelectElem.value = data[3];
        originalCostElem.value = data[4];
        sellingPriceElem.value = data[5];

        tableBody.removeChild(row);
      });

      sellBtn.addEventListener('click', function onSell(e) {
        const row = e.target.parentElement.parentElement;
        let indexOf = Array.from(tableBody.children).indexOf(row);
        const data = Array.from(tableBody.children[indexOf].children).map(e => e.textContent);

        let profit = Number(data[5]) - Number(data[4]);

        profitElem.textContent = (Number(profitElem.textContent) + Number(profit)).toFixed(2);
        carsList.appendChild(createLi([createSpan(`${data[0]} ${data[1]}`), createSpan(`${data[2]}`), createSpan(`${profit}`)], [['className', 'each-list']]));

        tableBody.removeChild(row);
      });

      const tr = createTr([
        createTd(`${makeElem.value}`),
        createTd(`${modelElem.value}`),
        createTd(`${yearElem.value}`),
        createTd(`${fuelSelectElem.value}`),
        createTd(`${originalCostElem.value}`),
        createTd(`${sellingPriceElem.value}`),
        createTd([editBtn, sellBtn]),], [['className', 'row']]);

      tableBody.appendChild(tr);

      makeElem.value = '';
      modelElem.value = '';
      yearElem.value = '';
      fuelSelectElem.value = '';
      originalCostElem.value = '';
      sellingPriceElem.value = '';
    }
  });
}