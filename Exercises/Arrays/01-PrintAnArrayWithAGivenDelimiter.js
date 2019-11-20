function solve(data) {
    return data
        .slice(0, data.length - 1)
        .join(`${data[data.length - 1]}`);
}

console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']));