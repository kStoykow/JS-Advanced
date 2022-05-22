function solve(arr) {
return Math.max(...arr.flat());
}
console.log(solve(
    [[20, 50, 10],
    [8, 33, 145]]
));