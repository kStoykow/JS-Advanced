function solve(arr) {
    return Object.entries(arr.reduce((a, b) => {
        let [town, prod, price] = b.split(' | ');

        if (a.hasOwnProperty(prod) == false) {
            a[prod] = { price: Number(price), town };
        } else {
            if (a[prod].price > price) {
                a[prod].price = Number(price);
                a[prod].town = town;
            }
        }

        return a;
    }, {}))
        .map(([prod, sellInfo] = e) => `${prod} -> ${Object.values(sellInfo)[0]} (${Object.values(sellInfo)[1]})`)
        .join('\n');
}
console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));