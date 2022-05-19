function solve(x, y) {
    let gcd = 0;
    for (let i = Math.max(x, y); i > 0; i -= 1) {
        if (x % i == 0 && y % i == 0) {
            gcd = i;
            break;
        }
    }
    return gcd;
}
console.log(solve(2154, 458));