function solve(arr) {
    let obj = arr.reduce((a, b) => {
        let [brand, model, quantity] = b.split(' | ');
        if (a.hasOwnProperty(brand) == false) {
            a[brand] = [];
        }
        let currModelObj = a[brand].find(e => Object.keys(e)[0] == model);

        if (currModelObj == undefined) {
            a[brand].push({ [model]: Number(quantity) });
        } else {
            currModelObj[model] += Number(quantity);
        }

        return a;
    }, {});

    const modelParse = (e) => `###${Object.entries(e).map(e => `${e[0]} -> ${e[1]}`)}`;
    const brandParse = (e) => `${e[0]}\n${e[1].map(modelParse).join('\n')}`;
    return Object.entries(obj).map(brandParse).join('\n');
}
console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'Audi | Q7 | 1000',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));