function solve(data) {
    return data
        .reduce((acc, row, i, arr) => {
            acc[0] += row[i];
            acc[1] += row[arr.length - 1 - i]

            return acc;
        }, [0, 0])
        .join(' ')
}

console.log(solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));