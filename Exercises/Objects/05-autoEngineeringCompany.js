function solve(data) {
    function addBrandIfMissig(acc, e) {
        if (!acc.hasOwnProperty(e)) {
            return acc[e] = {};
        }
    }

    function addModels(acc, b, m, q) {
        if (!acc[b].hasOwnProperty(m)) {
            return acc[b][m] = Number(q);
        }
        return acc[b][m] += Number(q);
    }

    const formatResult = ([k, v]) => {
        result += `${k}\n`;
        Object.entries(v)
            .map(([b, q]) => result += `###${b} -> ${q}\n`);
    }

    let result = '';

    Object.entries(data.reduce((acc, e) => {
        let [brand, model, quantity] = e.split(' | ');
        addBrandIfMissig(acc, brand);
        addModels(acc, brand, model, quantity);
        return acc;
    }, {}))
        .map(formatResult);

    return result;
}

console.log(
    solve(['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
    )
);