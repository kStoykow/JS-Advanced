function solve(arr, startI, endI) {
    startI = startI < 0 ? 0 : startI;
    endI = endI > arr.length - 1 ? arr.length - 1 : endI;
    return Array.isArray(arr) ? arr.map(Number).slice(startI, endI + 1).reduce((a, b) => a + b, 0) : NaN;
}
console.log(solve([10, 20, 30], -2, 300));