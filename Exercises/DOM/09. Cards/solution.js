function areCardsValid(p1, p2) {
   if (p1 !== 0 && p2 !== 0) {
      return true;
   }
   return false;
}
function clearSpans(left, right) {
   left.innerHTML = '';
   right.innerHTML = '';
   return
}
function renderHistory(history, p1, p2) {
   return history.textContent += `[${p1} vs ${p2}] `;
}
function setWinLoseBorders(p1, p2, p1Node, p2Node) {
   if (p1 > p2) {
      p1Node.style = 'border: 2px solid green';
      p2Node.style = 'border: 2px solid red';
      return
   }
   if (p1 < p2) {
      p1Node.style = 'border: 2px solid red';
      p2Node.style = 'border: 2px solid green';
      return
   }
}
function clickHandler(resultSpans, history) {
   return function (evt) {
      evt.target.src = 'images/whiteCard.jpg';
      if (evt.target.parentElement.id === 'player1Div') {
         p1 = Number(evt.target.name);
         resultSpans[0].innerHTML = evt.target.name;
         p1Node = evt.target;
      }
      else if (evt.target.parentElement.id === 'player2Div') {
         p2 = Number(evt.target.name);
         resultSpans[2].innerHTML = evt.target.name;
         p2Node = evt.target;
      }
      if (areCardsValid(p1, p2)) {
         setWinLoseBorders(p1, p2, p1Node, p2Node);
         renderHistory(history, p1, p2);
         p1 = 0;
         p2 = 0;
         clearSpans(resultSpans[0], resultSpans[2]);
      }
   };
}
let p1 = 0;
let p2 = 0;
let p1Node;
let p2Node;

function solve() {
   let resultSpans = Array.from(document.querySelectorAll('#result > span'));
   let cards = document.querySelectorAll('.cards > div > img')
   let history = document.getElementById('history');

   if (resultSpans === null || cards === null || history === null) {
      throw new Error('Missing element.');
   }

   Array.from(cards).map(x => x.addEventListener('click', clickHandler(resultSpans, history)));
}

document.addEventListener('DOMContentLoaded', solve);