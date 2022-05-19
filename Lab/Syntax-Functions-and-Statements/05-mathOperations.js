function solve(x, y, operand) {
    const mathMap = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        '%': (x, y) => x % y,
        '**': (x, y) => x ** y,
    }
    return mathMap[operand](x, y);
}
console.log(solve(5, 6, '+'));