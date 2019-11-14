function solve(data) {
    let juices = {};
    let bottles = {};

    function createJuices(o, j, q) {
        if (!o.hasOwnProperty(j)) {
            return o[j] = Number(q);
        }
        return o[j] += Number(q);
    }

    function createBottle(bottles, j) {
        if (juices[j] >= 1000) {
            if (!bottles.hasOwnProperty(j)) {
                bottles[j] = Math.floor(juices[j] / 1000);
                juices[j] -= (bottles[j] * 1000)
                return;
            }

            bottles[j] += Math.floor(juices[j] / 1000);
            juices[j] -= (bottles[j] * 1000);
            return;
        }
    }


    data.map(e => {
        let [juice, quantity] = e.split(' => ');
        createJuices(juices, juice, quantity);
        createBottle(bottles, juice);
    });

    return Object.entries(bottles)
        .map(([key, value]) => `${key} => ${value}`)
        .join('\n');
}

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
));