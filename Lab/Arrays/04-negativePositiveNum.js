function solve(arr) {
    const map = {
        true: 'push',
        false: 'unshift'
    }

    return arr.reduce((a, b) => {
        a[map[b >= 0]](b);
        return a;
    }, [])
        .join('\n');
}
console.log(solve([7, -2, 8, 9]));