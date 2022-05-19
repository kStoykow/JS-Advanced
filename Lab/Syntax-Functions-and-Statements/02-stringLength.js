function solve(...params) {
    return params.reduce((a, b) => {
        a[0] += b.length;
        a[1] += b.length / params.length;
        return a;
    }, [0, 0]).map(e => Math.floor(e)).join('\n');
}
console.log(solve('chocolate', 'ice cream', 'cake'));