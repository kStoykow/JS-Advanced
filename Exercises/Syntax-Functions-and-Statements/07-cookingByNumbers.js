function solve(...params) {
    let n = Number(params.shift());
    const commandsMap = {
        chop: (n) => n / 2,
        dice: (n) => Math.sqrt(n),
        spice: (n) => n + 1,
        bake: (n) => n * 3,
        fillet: (n) => n * 0.8,
    }
    let r = '';
    for (const e of params) {
        n = commandsMap[e](n)
        r += n + '\n';
    }
    return r;
}
console.log(solve('32', 'chop', 'chop', 'chop', 'chop', 'chop'));