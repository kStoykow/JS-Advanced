function solve(x, y) {
    let sum = 0;
    for (let i = Number(x); i <= Number(y); i++) {
        sum += i;
    }
    return sum;
}
console.log(solve(1, 5));