function solve(str) {
    return str.match(/\w+/g)
    .join(', ').toUpperCase();
}
console.log(solve('Hi?'));
