function solve(data) {
    let sokowe = {};
    let bottles = {};

    function createJuices(o, j, q) {
        if (!o.hasOwnProperty(j)) {
            return o[j] = Number(q);
        }
        return o[j] += Number(q);
    }

    function createBottle(o, j, q) {
        if (o[j] >= 1000) {
            if (!bottles.hasOwnProperty(j)) {
                bottles[j] = Math.floor(Number(q) / 1000);
                return o[j] -= bottles[j] * 1000;
            }

            bottles[j] += Math.floor(Number(q) / 1000);
            return o[j] -= bottles[j] * 1000;
        }
    }



    data.map(e => {
        let [juice, quantity] = e.split(' => ');
        createJuices(sokowe, juice, quantity);
        createBottle(sokowe, juice, quantity);
    })

    return bottles;
}

console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']));