function solve(arr) {
    return arr.sort((a, b) => a - b).slice(-Math.ceil(arr.length / 2))
}
console.log(solve([3, 19, 14, 7, 2, 19, 6]));