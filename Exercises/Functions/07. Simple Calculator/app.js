function calculator() {
    let xElem;
    let yElem;
    let resultElem;

    let calculate = {
        init(selector, selector2, resultSelector) {
            xElem = document.querySelector(selector);
            yElem = document.querySelector(selector2);
            resultElem = document.querySelector(resultSelector);
        },
        add() {
            resultElem.value = Number(xElem.value) + Number(yElem.value);
        },
        subtract() {
            resultElem.value = Number(xElem.value) - Number(yElem.value);
        },
    };

    return calculate;
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 
