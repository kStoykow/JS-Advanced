function attachEventsListeners() {
    let buttons = document.querySelectorAll('div :nth-child(3)');
    let inputElements = document.querySelectorAll('input[type="text"]');
    console.log(inputElements);
    if (buttons == null || inputElements == null) {
        throw new Error('Missing DOM element!');
    }

    function daysToCalc(x) {
        let hours = Number(x) * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        return [Number(x), hours, minutes, seconds];
    }
    function hoursToCalc(x) {
        let days = Number(x) / 24;
        let minutes = x * 60;
        let seconds = minutes * 60;
        return [days, Number(x), minutes, seconds];
    }
    function minutesToCalc(x) {
        let hours = Number(x) / 60;
        let days = hours / 24;
        let seconds = Number(x) * 60;
        return [days, hours, Number(x), seconds];
    }
    function SecondsToCalc(x) {
        let minutes = Number(x) / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        return [days, hours, minutes, Number(x)];
    }
    const btnHandlers = {
        'days': (x) => daysToCalc(x),
        'hours': (x) => hoursToCalc(x),
        'minutes': (x) => minutesToCalc(x),
        'seconds': (x) => SecondsToCalc(x),
    }

    function clickHandler(e) {
        if (e.target.value == "Convert") {
            if (typeof btnHandlers[e.target.parentElement.querySelector('input').id] == 'function') {
                let calculated = btnHandlers[e.target.parentElement.querySelector('input').id](e.target.parentElement.querySelector('input').value);
                Array.from(inputElements).map((e, i) => e.value = calculated[i]);
            }
        }
    }
    document.getElementsByTagName('main')[0].addEventListener('click', clickHandler);
}