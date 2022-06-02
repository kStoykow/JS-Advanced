function search() {
   let ul = document.getElementById('towns');
   let search = document.getElementById('searchText');
   let btn = document.getElementsByTagName('button');
   let r = document.getElementById('result');
   let li = ul.children;

   if (ul == null || search == null || btn == null || r == null || li == null) {
      throw new Error('Missing DOM element!');
   }

   Array.from(li).map(e => e.style['text-decoration'] = 'none');
   r.textContent = '';

   let matches = Array.from(li).filter(e => e.textContent.includes(search.value));
   matches.map(e => {
      e.style['text-decoration'] = 'underline';
      e.style['font-weight'] = 'bold';
      return e;
   });
   r.textContent = `${matches.length} matches found`;
}