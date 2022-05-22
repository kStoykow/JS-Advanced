function solve(length, seq) {
    let r = [1];

    for (let i = 0; i < length - 1; i++) {
        r.push(r.slice(-seq).reduce((a, b) => a + b))
    }
    return r;
}
console.log(solve(8, 3));