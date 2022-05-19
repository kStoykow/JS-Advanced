function solve(param) {
    return typeof param == 'number' ? (Math.PI * param ** 2).toFixed(2) : `We can not calculate the circle area, because we receive a ${typeof param}.`
}
console.log(solve(5));
console.log(solve('name'));