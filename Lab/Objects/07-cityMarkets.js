function solve(params) {
    //@ts-check
    let towns = {};
    let result = '';
    function addtownIfMissing(obj, town) {
        if (!obj.hasOwnProperty(town)) {
            obj[town] = {};
        }
    }

    function addProductIfMissing(obj, town, product) {
        if (!obj[town].hasOwnProperty(product)) {
            obj[town][product] = 0;
        }
    }

    params.map(line => {
        let [town, product, amoutOfSales] = line.split(' -> ');
        let [quantity, price] = amoutOfSales.split(' : ');
        addtownIfMissing(towns, town);
        addProductIfMissing(towns, town, product, quantity, price);
        towns[town][product] += Number(quantity) * Number(price);
    })

    Object.entries(towns)
        .map(([town, values]) => {
            result += `Town - ${town}\n`;
            Object.entries(values)
                .map(([product, price]) => result += `$$$${product} : ${price}\n`);
        });

    return result;
}

console.log(
    solve(
        ['Sofia -> Laptops HP -> 200 : 2000',
            'Sofia -> Raspberry -> 200000 : 1500',
            'Sofia -> Audi Q7 -> 200 : 100000',
            'Montana -> Portokals -> 200000 : 1',
            'Montana -> Qgodas -> 20000 : 0.2',
            'Montana -> Chereshas -> 1000 : 0.3'])
);