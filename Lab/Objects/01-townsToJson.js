function solve(params) {
    const deserialize = (arr) => arr.split('|')
        .filter(e => e.length > 0)
        .map(e => e.trim())
        .map(e => e == Number(e) ? Number(Number(e).toFixed(2)) : e);

    let keys = deserialize(params.shift())
    let result = [];

    for (const line of params) {
        let values = deserialize(line);
        let currObj = {};
        keys.forEach((key, i) => {
            currObj[key] = values[i];
        });
        result.push(JSON.stringify(currObj));
    }

    return result;
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 43.0757  |25.6172 |',
    '| Beijing | 34.50 | 56.11 |']));