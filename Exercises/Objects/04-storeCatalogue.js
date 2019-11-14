function solve(data) {
    function addFirstIfEmpty(acc, str) {
        if (acc.length === 0) {
            return acc.push(str[0], `${str}`);
        }
    }

    function addNewProducts(acc, str) {
        if (str[0] != (acc[acc.length - 1])[0]) {
            return acc.push(str[0], `${str}`);
        }
    }
    
    function addProducts(acc, str) {
        if (str != (acc[acc.length - 1]))
            return acc.push(`${str}`);
    }

    const isProduct = (str) => str.length > 1;
    const alphabetical = (a, b) => a[0].localeCompare(b[0]);
    const makeItString = (e) => e.join(': ');
    const formatTheElements = (e) => {
        if (isProduct(e)) {
            return `  ${e}`;
        }
        return `${e}`;
    };

    return Object.entries(
        data.reduce((acc, e) => {
            let [key, value] = e.split(' : ');
            acc[key] = Number(value);

            return acc;
        }, {})
    )
        .sort(alphabetical)
        .map(makeItString)
        .reduce((acc, e) => {
            addFirstIfEmpty(acc, e);
            addNewProducts(acc, e);
            addProducts(acc, e);

            return acc;
        }, [])
        .map(formatTheElements)
        .join('\n');
}

console.log(
    solve(['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'])
);