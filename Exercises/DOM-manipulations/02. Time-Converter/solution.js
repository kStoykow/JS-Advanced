function attachEventsListeners() {
    const buttons = document.querySelectorAll('div :nth-child(3)');
    const inputElements = document.querySelectorAll('input[type="text"]');

    if (buttons == null || inputElements == null) {
        throw new Error('Missing DOM element!');
    }

    function daysToCalc(x) {
        const hours = Number(x) * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        return [Number(x), hours, minutes, seconds];
    }
    function hoursToCalc(x) {
        const days = Number(x) / 24;
        const minutes = x * 60;
        const seconds = minutes * 60;
        return [days, Number(x), minutes, seconds];
    }
    function minutesToCalc(x) {
        const hours = Number(x) / 60;
        const days = hours / 24;
        const seconds = Number(x) * 60;
        return [days, hours, Number(x), seconds];
    }
    function SecondsToCalc(x) {
        const minutes = Number(x) / 60;
        const hours = minutes / 60;
        const days = hours / 24;

        return [days, hours, minutes, Number(x)];
    }
    const btnHandlers = {
        'daysBtn': (x) => daysToCalc(x),
        'hoursBtn': (x) => hoursToCalc(x),
        'minutesBtn': (x) => minutesToCalc(x),
        'secondsBtn': (x) => SecondsToCalc(x),
    }

    function clickHandler(e) {
        if (e.target.value == "Convert") {
            if (typeof btnHandlers[e.target.id] == 'function') {
                let calculated = btnHandlers[e.target.id](e.target.parentElement.querySelector('input').value);
                Array.from(inputElements).map((e, i) => e.value = calculated[i]);
            }
        }
    }
    document.getElementsByTagName('main')[0].addEventListener('click', clickHandler);
}