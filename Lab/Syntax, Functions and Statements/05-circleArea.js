function solve(a) {
    return typeof a == 'number'
        ? (Math.PI * a * a).toFixed(2)
        : `We can not calculate the circle area, because we receive a ${typeof a}.`;
}

console.log(solve(5));
console.log(solve('name'));
