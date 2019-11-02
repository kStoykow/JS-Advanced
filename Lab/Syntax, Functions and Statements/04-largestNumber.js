function solve(...params) {
    return `The largest number is ${params.sort((a, b) => b - a)[0]}.`;
}

function solve2(...params) {
    return `The largest number is ${Math.max(...params)}.`;
}

console.log(solve(5, -3, 16, 20));
console.log(solve2(12, 4, -1, -55, 2));