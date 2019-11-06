function solve(params) {
    let num = Number(params.shift());
    const operationMap = {
        'chop': (x) => x / 2,
        'dice': (x) => Math.sqrt(x),
        'spice': (x) => x += 1,
        'bake': (x) => x * 3,
        'fillet': (x) => x *= 0.8,
    };

    let result = '';

    for (const command of params) {
        result += `${operationMap[command](num)}\n`;
        num = operationMap[command](num);
    }
    return result;
}

console.log(solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));