function solve(arr) {
    return arr.filter((_, i) => i % 2 == 1).reverse().map(e => e * 2).join(' ')
}
console.log(solve([10, 15, 20, 25]));