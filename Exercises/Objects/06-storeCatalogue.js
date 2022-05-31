function solve(arr) {
    const split = (e) => e.split(' : ');
    const alphabeticalAscendingSort = (a, b) => a[0].localeCompare(b[0]);
    const productParser = (e) => e.join(': ');

    let r = arr.map(split).sort(alphabeticalAscendingSort).map(productParser);
    let buffer = r[0][0];

    return r.reduce((a, b) => {
        if (b[0] != buffer) {
            buffer = b[0];
            a += `${buffer}\n`;
        }
        a += `${b}\n`;

        return a;
    }, `${buffer}\n`);
}
console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));