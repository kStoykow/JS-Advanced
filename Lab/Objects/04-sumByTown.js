function solve(input) {
    function addPropIfMissing(agg, e) {
        if (!agg.hasOwnProperty(e)) {
            agg[e] = 0;
        }
    };
    let cities = input.filter((e, i) => i % 2 == 0);
    let inc = input.filter((e, i) => i % 2 !== 0).map(Number);

    return JSON.stringify(
        cities.reduce((result, curr, i) => {
            addPropIfMissing(result, curr);
            result[curr] += Number(inc[i]);
            return result;
        }, {})
    );
}

console.log(solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']));