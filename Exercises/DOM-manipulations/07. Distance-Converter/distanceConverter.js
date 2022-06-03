function attachEventsListeners() {
    let inputElem = document.getElementById('inputDistance');
    let selectFromElem = document.getElementById('inputUnits');
    let btn = document.getElementById('convert');
    let outputElem = document.getElementById('outputDistance');
    let outputOptionsElement = document.getElementById('outputUnits');

    if (inputElem == null || selectFromElem == null || btn == null || outputElem == null || outputOptionsElement == null) {
        throw new Error('Missing DOM element!');
    }

    function convertToMeters(x, from) {
        const unitsMap = {
            'km': (x) => x * 1000,
            'm': (x) => x,
            'cm': (x) => x * 0.01,
            'mm': (x) => x * 0.001,
            'mi': (x) => x * 1609.34,
            'yrd': (x) => x * 0.9144,
            'ft': (x) => x * 0.3048,
            'in': (x) => x * 0.0254,
        }

        return unitsMap[from](x);
    }
    const fromMetersToUnitsMap = {
        'km': (x) => x / 1000,
        'm': (x) => x,
        'cm': (x) => x / 0.01,
        'mm': (x) => x / 0.001,
        'mi': (x) => x / 1609.34,
        'yrd': (x) => x / 0.9144,
        'ft': (x) => x / 0.3048,
        'in': (x) => x / 0.0254,
    }

    function converter() {
        let num = Number(inputElem.value);
        let numMeters = convertToMeters(num, selectFromElem.value);
        let r = fromMetersToUnitsMap[outputOptionsElement.value](numMeters);
        outputElem.value = r;
    }

    btn.addEventListener('click', converter);
}