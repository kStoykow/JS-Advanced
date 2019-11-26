function add(num) {
    let sum = num;

    function calc(x) {
        sum += x;
        return calc;
    }

    calc.toString = function () {
        return sum
    };

    return calc;
}

console.log(add(1)(6)(-3));