function solve(arr) {
    return arr.reduce((a, b, i) => {
        a[0] += b[i];
        a[1] += b[b.length - 1 - i];
        return a;
    }, [0, 0])
        .join(' ');
}
console.log(solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));