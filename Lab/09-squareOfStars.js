function solve(x = 5) {
    let r = '';
    for (let i = 0; i < x; i++) {
        r += `* `.repeat(x) + '\n';
    }
return r;
}
console.log(solve(3));