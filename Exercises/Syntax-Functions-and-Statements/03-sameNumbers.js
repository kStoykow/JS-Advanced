function solve(x) {
    let bool = x.toString().split('').every(num => x.toString()[0] == num);
    return [bool, x.toString().split('').reduce((a, b) => a + Number(b), 0)].join('\n');
}
console.log(solve(2222));