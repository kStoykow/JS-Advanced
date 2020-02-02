function namesTemplate(arr) {
  return `Bought furniture: ${arr.join(', ')}\n`;
}
function priceTemplate(price) {
  return `Total price: ${price.toFixed(2)}\n`;
}
function decorFactorTemplate(fac) {
  return `Average decoration factor: ${fac}`;
}
function genericRender(type, content) {
  let htmlElem = document.createElement(type);
  if (typeof content == 'string' || typeof content == 'number') {
    htmlElem.innerHTML = content;
  }
  if (typeof content == 'object') {
    htmlElem.appendChild(content);
  }

  return htmlElem;
}
function attributeItemRender(type, attribute, content) {
  let item = document.createElement(type);
  item.setAttribute(attribute, content);
  return item;
}
function appendTd(parent, child) {
  return parent.appendChild(child);
}
function generateHandler(generateTextArea, table) {
  return function () {
    JSON.parse(generateTextArea.value).map(obj => {
      let img = attributeItemRender('img', 'src', obj.img);
      let checkbox = attributeItemRender('input', 'type', 'checkbox');

      let row = genericRender('tr');
      let name = genericRender('p', obj.name);
      let price = genericRender('p', obj.price);
      let decorationFactor = genericRender('p', obj.decFactor);

      appendTd(row, genericRender('td', img));
      appendTd(row, genericRender('td', name));
      appendTd(row, genericRender('td', price));
      appendTd(row, genericRender('td', decorationFactor));
      appendTd(row, genericRender('td', checkbox));
      appendTd(table.querySelector('tbody'), row);
    });
  }
}
function buyHandler(table, buyTextArea) {
  return function () {
    let items = Array.from(table.querySelectorAll('tr'))
      .slice(1)
      .filter(checkedCheckbox)
      .map(getNames)
      .reduce((a, b) => {
        a.push(b);
        return a;
      }, []);

    let price = Array.from(table.querySelectorAll('tr'))
      .slice(1)
      .filter(checkedCheckbox)
      .map(getPrice)
      .reduce((a, b) => Number(a) + Number(b), 0);

    let decorFactor = Array.from(table.querySelectorAll('tr'))
      .slice(1)
      .filter(checkedCheckbox)
      .map(getDecorationFactor);

    let avgDecFactor = decorFactor.reduce((a, b) => Number(a) + Number(b), 0) / decorFactor.length;

    buyTextArea.value += namesTemplate(items);
    buyTextArea.value += priceTemplate(price);
    buyTextArea.value += decorFactorTemplate(avgDecFactor);
  };
}
const checkedCheckbox = x => x.children[4].children[0].checked;
const getNames = x => x.children[1].textContent;
const getPrice = x => x.children[2].textContent;
const getDecorationFactor = x => x.children[3].textContent;

function solve() {
  let generateTextArea = document.querySelector('#exercise > textarea');
  let generateCta = document.querySelector('#exercise > button');
  let table = document.getElementsByClassName('table')[0];
  let buyTextArea = document.querySelector('#exercise > :nth-child(5)');
  let buyCta = document.querySelector('#exercise > :nth-child(6)');


  if (generateTextArea === null || generateCta === null || table === null || buyTextArea === null || buyCta === null) {
    throw new Error('Missing element.');
  }

  generateTextArea.value = `[
  { "img":"https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG",
      "name": "Sofa",
      "price": "259",
      "decFactor":"0.4"},  {
      "img":"https://cdn.jysk.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/0/7011671065_3dr_sonoma.jpg",
      "name": "Wardrobe",
      "price": "120",
      "decFactor":"1.2" }]`;

  generateCta.addEventListener('click', generateHandler(generateTextArea, table));
  buyCta.addEventListener('click', buyHandler(table, buyTextArea));
}

document.addEventListener('DOMContentLoaded', solve);




