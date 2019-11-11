function solve(data) {
    function createHero(arr, hero, lvl, items) {
        arr.push({
            'name': hero,
            'level': Number(lvl),
            'items': items,
        });
    }

    return JSON.stringify(data.reduce((agg, e) => {
        let [hero, level, itemArr] = e.split(/\s*\/\s*/);
        let items = [];
        if (e.split(/\s*\/\s*/).length > 2) {
            items = itemArr.split(', ');
        }

        createHero(agg, hero, level, items);

        return agg
    }, []));
}

console.log(solve(['Isacc / 25 /',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));