function sendCtaHandler(myMessages, textArea) {
   return function () {
      if (textArea.value !== '') {
         let newMsgDiv = document.createElement('div');
         newMsgDiv.setAttribute('class', 'message my-message');
         newMsgDiv.textContent = textArea.value;
         myMessages.appendChild(newMsgDiv);
         textArea.value = '';
      }
   }
}

function solve() {
   let button = document.getElementById('send');
   let myMessages = document.getElementById('chat_messages');
   let textArea = document.getElementById('chat_input');

   if (button == null || myMessages == null || textArea == null) {
      throw new Error('Missing element.');
   }

   button.addEventListener('click', sendCtaHandler(myMessages, textArea));
}

document.addEventListener('DOMContentLoaded', solve);