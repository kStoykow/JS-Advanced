function solve(params) {
    const sum = (arr) => arr.reduce((acc, e) => acc + Number(e), 0);
    const invert = (arr) => arr.reduce((acc, e) => acc + 1 / e, 0);
    const concat = (arr) => arr.reduce((acc, e) => acc + e, '');
    let result = [sum(params), invert(params), concat(params)];
    return result.join('\n');
}

console.log(solve([2, 4, 8, 16]))