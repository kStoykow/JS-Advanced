function solve(data) {
    return Math.max(...data
        .reduce((a, b) => [...a, ...b], []));
}

console.log(solve([
    [20, 50, 10],
    [8, 33, 145],
    [12, 45, 216, 21]
]));