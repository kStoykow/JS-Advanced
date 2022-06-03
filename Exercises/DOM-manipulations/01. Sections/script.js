function create(words) {
   let containerElement = document.getElementById('content');

   if (containerElement == null) {
      throw new Error('Missing container element');
   }

   function clickHandler(e) {
      e.target.firstChild.style.display = 'block';
   }

   words.map(e => {
      let section = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = e;
      p.style.display = 'none';
      section.appendChild(p);
      containerElement.appendChild(section);
   });

   containerElement.addEventListener('click', clickHandler);
}