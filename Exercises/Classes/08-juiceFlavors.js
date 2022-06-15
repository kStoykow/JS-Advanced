function solve(arr) {
    let obj = {};
    let result = {};
    for (const e of arr) {
        let [juice, quantity] = e.split(' => ');
        if (obj.hasOwnProperty(juice) == false) {
            obj[juice] = 0;
        }
        obj[juice] += Number(quantity);

        if (obj[juice] >= 1000) {
            if (result.hasOwnProperty(juice) == false) {
                result[juice] = 0;
            }
            result[juice] += Math.trunc(obj[juice] / 1000);
            obj[juice] = obj[juice] % 1000;
        }
    }

    return Object.entries(result).map(e => e.join(' => ')).join('\n');
}
console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

));