function solve() {
   document.querySelector('#searchBtn').addEventListener('click', clickHandler);

   function clickHandler() {
      let input = document.getElementById('searchField');
      let rows = document.querySelectorAll('.container tbody tr');

      if (input == null || rows == null) {
         throw new Error('Missing DOM element!');
      }

      const hasText = (e) => e.textContent.includes(input.value);
      const rowMatch = (tr) => Array.from(tr.children).some(hasText);

      Array.from(rows).map(e => e.classList = '');

      Array.from(rows).filter(rowMatch).map(e => e.classList = 'select');

      input.value = '';
   }
}