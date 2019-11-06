function solve(x, y) {
    for (let divisor = Math.min(x, y); divisor >= 0; divisor--) {
        if (x % divisor == 0 && y % divisor == 0) {
            return divisor;
        }
    }
}

console.log(solve(15, 5));