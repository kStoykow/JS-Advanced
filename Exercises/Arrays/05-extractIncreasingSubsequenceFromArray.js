function solve(arr) {
    return arr.reduce((a, b, i) => {
        if (b >= a[a.length - 1] && i > 0) {
            a.push(b);
        }
        return a;
    }, [arr[0]]);
}
console.log(solve([1, 3, 8, 8, 4, 10, 12, 3, 2, 24]
));