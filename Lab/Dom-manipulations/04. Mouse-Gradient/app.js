function attachGradientEvents() {
    let boxElem = document.getElementById('gradient');
    let resultElem = document.getElementById('result');

    if (boxElem == null || resultElem == null) {
        throw new Error('Missing DOM element');
    }
    
    function mousemoveHandler(e) {
        resultElem.textContent = `${Math.floor((Number(e.offsetX) / Number(e.target.clientWidth)) * 100)}%`;
    }

    boxElem.addEventListener('mousemove', mousemoveHandler);
}