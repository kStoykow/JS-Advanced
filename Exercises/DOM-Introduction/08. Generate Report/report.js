function generateReport() {
    let trHeadersElements = document.querySelector('table>thead>tr:nth-child(1)');
    let headersInputElements = Array.from(trHeadersElements.querySelectorAll('input'));
    let trDataElements = document.querySelectorAll('tbody tr');
    let outputElement = document.getElementById('output');

    if (trHeadersElements == null || headersInputElements == null || trDataElements == null || outputElement == null) {
        throw new Error('Missing DOM Element!');
    }

    let keys = headersInputElements.map(e => e.name);
    let indexOfCheckedEl = headersInputElements.reduce((a, b, i) => {
        if (b.checked) {
            a.push(i);
        }

        return a;
    }, []);

    let output = Array.from(trDataElements).reduce((a, b) => {
        let currObj = Array.from(b.children).reduce((agg, el, i) => {
            if (indexOfCheckedEl.includes(i)) {
                agg[keys[i]] = el.textContent;
            }
            return agg;
        }, {});

        a.push(currObj);
        return a;
    }, []);

    outputElement.innerText = JSON.stringify(output);
}