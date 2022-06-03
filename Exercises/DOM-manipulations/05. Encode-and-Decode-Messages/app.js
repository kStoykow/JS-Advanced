function encodeAndDecodeMessages() {
    let main = document.getElementById('main');
    let textAreaElements = document.getElementsByTagName('textarea');
    let buttonElements = document.getElementsByTagName('button');

    if (textAreaElements == null || buttonElements == null) {
        throw new Error('Missing DOM element!');
    }
    function encode(textAreaElements) {
        let content = textAreaElements[0].value;
        textAreaElements[1].textContent = content.split('').map(e => String.fromCharCode(e.charCodeAt(0) + 1)).join('');
        textAreaElements[0].value = '';
    }

    function decode(textAreaElements) {
        let content = textAreaElements[1].textContent;
        textAreaElements[1].textContent = content.split('').map(e => String.fromCharCode(e.charCodeAt(0) - 1)).join('');
    }

    const msgHandler = {
        'Encode and send it': encode,
        'Decode and read it': decode,
    }

    function clickHandler(e) {
        if (typeof msgHandler[e.target.textContent] == 'function') {
            msgHandler[e.target.textContent](textAreaElements);
        }
    }

    main.addEventListener('click', clickHandler);
}