function create(words) {
   const containerElement = document.getElementById('content');

   if (containerElement == null) {
      throw new Error('Missing container element');
   }

   function clickHandler(e) {
      e.target.firstChild.style.display = 'block';
   }

   words.map(e => {
      const section = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = e;
      p.style.display = 'none';
      section.appendChild(p);
      containerElement.appendChild(section);
   });

   containerElement.addEventListener('click', clickHandler);
}