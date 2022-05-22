function solve(arr) {
    return arr.filter((_, i) => i % 2 == 0).join(' ');
}
console.log(solve(['20', '30', '40', '50', '60']));