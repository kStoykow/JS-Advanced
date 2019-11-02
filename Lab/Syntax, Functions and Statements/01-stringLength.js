function solve(...params) {
    let sum = params.reduce((acc, e) => acc + e.length, 0);
    let avg = Math.round(sum / params.length);
    console.log([sum, avg].join('\n'));
}
solve('chocolate', 'ice cream', 'cake')