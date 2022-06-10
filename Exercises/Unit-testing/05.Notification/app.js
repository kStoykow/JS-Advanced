function notify(message) {
  let notificationElem = document.getElementById('notification');
  notificationElem.textContent = message;
  notificationElem.style.display = 'block';
  
  notificationElem.addEventListener('click', (e) => {
    e.currentTarget.style.display = 'none';
  });
}