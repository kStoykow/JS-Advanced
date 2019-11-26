function solve() {
    let dataMap = {};

    function addPropIfMissing(map, e) {
        if (!map.hasOwnProperty(typeof e)) {
            return map[typeof e] = 0;
        }
    }

    for (const e of arguments) {
        addPropIfMissing(dataMap, e);
        dataMap[typeof e]++;
        console.log(`${typeof e}: ${e}`);
    }

    Object.entries(dataMap)
        .sort((a, b) => b[1] - a[1])
        .map(([key, count]) => console.log(`${key} = ${count}`));
}
console.log(solve('cat', 21, 41, 42, 65, function () { console.log('Hello world!'); }, { 'qwe': 1 }));