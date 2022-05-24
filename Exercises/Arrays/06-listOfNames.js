function solve(arr) {
    return arr.sort((a, b) => a.localeCompare(b)).map((e, i) => `${i + 1}.${e}`).join('\n');
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));