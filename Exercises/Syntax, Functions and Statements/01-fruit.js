function solve(...params) {
    let money = (params[2] * ((params[1] / 1000))).toFixed(2);
    let weight = (params[1] / 1000).toFixed(2);
    return `I need $${money} to buy ${weight} kilograms ${params[0]}.`
}

console.log(solve('orange', 2500, 1.80));


