function solve(a, b, operand) {
    const operandsMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,
    };

    return operandsMap[operand](a, b);
}

console.log(solve(5, 6, '*'));
