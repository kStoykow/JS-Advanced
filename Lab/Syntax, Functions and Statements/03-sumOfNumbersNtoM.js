function solve(a, b) {
    let sum = 0;
    for (let i = Number(a); i <= Number(b); i++) {
        sum += i;
    }
    return sum;
}

console.log(solve('1', '5'));
