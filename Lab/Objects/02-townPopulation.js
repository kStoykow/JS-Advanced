function solve(arr) {
    return Object.entries(arr.reduce((a, b) => {
        let [name, population] = b.split(' <-> ');
        if (a.hasOwnProperty(name) == false) {
            a[name] = 0;
        }
        a[name] += Number(population);
        return a;
    }, {}))
        .map(e => e.join(' : '))
        .join('\n');
}
console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
));