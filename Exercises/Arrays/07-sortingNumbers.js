function solve(data) {
    data = data.sort((a, b) => a - b);
    let arr = [];


    for (let i = 0; i < data.length / 2 - 0.5; i++) {    //takes all elements if even count
        arr.push(data[i]);
        arr.push(data[data.length - 1 - i]);
    }
    if (data.length / 2 % 2 !== 0) {                     //takes the middle element if odd count
        arr.push(data[data.length / 2 - 0.5])
    }
    return arr;

}
console.log(solve([1, 65, 3, 52, 48, -3, 18, 56]));
