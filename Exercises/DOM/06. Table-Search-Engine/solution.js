function clickHandler(input, rows, newSearchMatcher) {
   return function ctaHandler() {
      let searchVal = new RegExp(input.value, 'gi');

      Array.from(rows).map(x => newSearchMatcher(x, searchVal));
      input.value = '';
   };
}
function newSearchMatcher(row, str) {
   row.className = '';

   if (row.innerHTML.match(str)) {
      return row.className = 'select';
   }
}

function solve() {
   let searchCta = document.getElementById('searchBtn');
   let input = document.getElementById('searchField');
   let rows = document.querySelector('.container tbody').querySelectorAll('tr');

   if (searchCta === null || input === null || rows === null) {
      throw new Error('Missing element.');
   }

   searchCta.addEventListener('click', clickHandler(input, rows, newSearchMatcher));
}

document.addEventListener('DOMContentLoaded', solve);