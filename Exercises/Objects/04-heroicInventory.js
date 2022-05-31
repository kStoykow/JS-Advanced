function solve(arr) {
    return JSON.stringify(arr.reduce((a, b) => {
        let [name, level, items] = b.split(' / ');
        a.push({
            name,
            level: Number(level),
            items: items !== undefined ? items.split(', ') : [],
        });

        return a;
    }, []));
}
console.log(solve(['Isacc / 25 /',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));