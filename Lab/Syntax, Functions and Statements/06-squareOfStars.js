function solve(count = 5) {
    let sum = '';
    for (let i = 0; i < count; i++) {
        sum += `${'* '.repeat(count).trim()}\n`;
    }
    return sum;
}
console.log(solve(3));
