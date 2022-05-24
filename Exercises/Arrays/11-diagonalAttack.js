function solve(arr) {
    arr = arr.map(e => e.split(' ').map(Number));
    let primary = arr.reduce((a, b, i) => a + b[i], 0);
    let secondary = arr.reduce((a, b, i) => a + b[b.length - 1 - i], 0);

    if (primary == secondary) {
        return arr.map((e, i) => e.map((x, insideI, arr) => {
            if (insideI != i && insideI != arr.length - 1 - i) {
                return primary;
            }
            return x;
        }).join(' ')).join('\n');
    }

    return arr.map(e => e.join(' ')).join('\n');
}
console.log(solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 2']
));