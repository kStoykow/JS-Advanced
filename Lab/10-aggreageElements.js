function solve(arr) {
    // let sum = arr.reduce((a, b) => a + b, 0);
    // let inverse = arr.reduce((a, b) => a + 1 / b, 0);
    // let concat = arr.reduce((a, b) => a + b, '');
    // return [sum, inverse, concat].join('\n');

    return arr.reduce((a, b) => {
        a[0] += b;
        a[1] += 1 / b;
        a[2] += b;

        return a;
    }, [0, 0, '']).join('\n');
}
console.log(solve([1, 2, 3]));