function solve(data) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < data.length; i++) {
        a += data[i][i];
        b += data[i][data.length - 1 - i]
    }

    return [a,b].join(' ');
}

console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));