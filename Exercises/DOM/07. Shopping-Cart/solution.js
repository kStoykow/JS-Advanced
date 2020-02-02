function disableButtons() {
   let buttons = Array.from(document.querySelectorAll('button'));
   buttons.forEach(button => button.disabled = true);
}
function addToCartIfMissing(list, item, val) {
   if (list.hasOwnProperty(item)) {
      return list[item] += Number(val);
   }
   return list[item] = Number(val);
}
function addingTemplate(name, price) {
   return `Added ${name} for ${price} to the cart.\n`;
}
function totalMoney(list) {
   return `You bought ${Object.keys(list).join(', ')} for ${Object.values(list).reduce((a, b) => Number(a) + Number(b), 0).toFixed(2)}.`
}

function solve() {
   let textArea = document.getElementsByTagName('textarea')[0];
   let addCta = document.getElementsByClassName('add-product');
   let checkOutCta = document.querySelector('body>div>button');
   let list = {};
   Array.from(addCta).map((x, i) => {
      x.addEventListener('click', function clickHandlers() {
         let productName = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
         let productPrice = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;

         if (textArea === null || addCta === null || checkOutCta === null || productName === null || productPrice === null) {
            throw new Error('Missing element.');
         }

         addToCartIfMissing(list, productName, productPrice);
         textArea.value += addingTemplate(productName, productPrice);
      });
   });

   checkOutCta.addEventListener('click', function checkOut() {
      textArea.value += totalMoney(list);
      disableButtons();
   });
}

document.addEventListener('DOMContentLoaded', solve);