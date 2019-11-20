function solve(data) {
    const extractArrayWithGivenStep = (e, i) => i % data[data.length - 1] === 0;

    return data
        .slice(0, data.length - 1)
        .filter(extractArrayWithGivenStep)
        .join('\n');
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']));