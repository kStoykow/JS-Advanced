function solve(input) {
    function addPropIfMissing(agg, key) {
        if (!agg.hasOwnProperty(key)) {
            agg[key] = 0;
        }
    };
    return Object.entries(input.map(line => line.split('<->'))
        .reduce((result, curr) => {
            let [key, val] = curr;
            addPropIfMissing(result, key);
            result[key] += Number(val);
            return result;
        }, {}))
        .map(([key, val]) => `${key}: ${val}`)
        .join('\n');
}

console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']));