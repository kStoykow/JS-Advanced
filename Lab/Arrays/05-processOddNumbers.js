function solve(data) {
    const getOdds = (e, i) => i % 2 === 1;
    const doubleThem = e => e * 2;

    return data
        .filter(getOdds)
        .map(doubleThem)
        .reverse()
        .join(' ')
}

console.log(solve([3, 0, 10, 4, 7, 3]));