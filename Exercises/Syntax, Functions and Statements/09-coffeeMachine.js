function solve(params) {
    let profit = 0;
    let result = '';
    const priceMap = {
        'coffee': {
            'caffeine': 0.8,
            'decaf': 0.9,
        },
        'tea': 0.8,
    }

    for (const order of params) {
        
        let [coin, type, ...rest] = order.split(', ');
        let sugarPrice = Number(rest.pop());
        let caffOrDecaf = '';
        let cost = 0;

        if (type == 'coffee') {
            caffOrDecaf = rest[0];
        }

        if (sugarPrice != 0) {
            sugarPrice = 0.1;
        }

        if (rest.includes('milk')) {
            cost = type == 'coffee'
                ? priceMap[type][caffOrDecaf] + sugarPrice + Number((priceMap[type][caffOrDecaf] * 0.1).toFixed(1))
                : priceMap[type] + sugarPrice + Number((priceMap[type] * 0.1).toFixed(1));

        } else {
            cost = type == 'coffee'
                ? (priceMap[type][caffOrDecaf] + sugarPrice)
                : priceMap[type] + sugarPrice;
        }

        if (Number(coin) >= cost) {
            profit += cost
            result += `You ordered ${type}. Price: $${cost.toFixed(2)} Change: $${(coin - cost).toFixed(2)}\n`;

        } else {
            result += `Not enough money for ${type}. Need $${(cost - coin).toFixed(2)} more.\n`;
        }
    }

    return `${result}Income Report: $${profit.toFixed(2)}`;
}

console.log(solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']));