//@ts-check
function solve(params) {
    let result = {};
    let products = params.filter((e, i) => i % 2 === 0 ? e : '');
    let quantity = params.filter((e, i) => i % 2 !== 0 ? e : '').map(Number);

    products.forEach((key, i) => result[key] = quantity[i]);
    return result;
}

console.log(solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]));