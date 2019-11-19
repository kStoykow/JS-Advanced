function solve(data) {
    let result = data[0];

    for (let i = 1; i < data.length; i++) {
        result = result.concat(data[i])
    }
    
    return Math.max(...result);
}

console.log(solve([
    [20, 50, 10],
    [8, 33, 145],
    [12, 45, 216, 21]
]));