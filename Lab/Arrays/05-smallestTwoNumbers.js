function solve(arr) {
    return arr.sort((a, b) => a - b).slice(0, 2).join(' ');
}
console.log(solve([30, 15, 50, 5]));