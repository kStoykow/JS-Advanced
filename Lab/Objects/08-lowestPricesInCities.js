function solve(params) {
    let result = '';

    function addProductIfMissing(obj, product) {
        if (!obj.hasOwnProperty(product)) {
            return obj[product] = {};
        }
    }

    function saveCheaper(obj) {
        Object.entries(obj)
            .map(kvp => {
                let [product, productValues] = kvp;
                let [town, price] = Object.entries(productValues).sort((a, b) => Number(a[1]) - Number(b[1]))[0];
                result += `${product} -> ${price} (${town})\n`;
            });

        return result;
    }

    return saveCheaper(
        params.reduce((o, e) => {
            let [town, product, price] = e.split(' | ');
            addProductIfMissing(o, product);
            o[product][town] = Number(price);

            return o;
        }, {})
    );

}

console.log(
    solve(['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000',
    ])
);