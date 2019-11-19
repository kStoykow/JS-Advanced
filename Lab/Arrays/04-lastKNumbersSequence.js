function solve(length, sumLength) {
    let result = [1];

    for (let i = 1; i < length; i++) {
        result.push(
            result.slice(-sumLength).reduce((a, b) => a + b)
        );
    }

    return result.join(' ');
}

console.log(solve(8, 2));