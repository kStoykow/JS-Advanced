function solve(arr, el, el2) {
    return arr.slice(arr.indexOf(el), arr.indexOf(el2) + 1);
}
console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));