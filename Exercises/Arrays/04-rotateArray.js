function solve(data) {
    let myArr = data.slice(0, data.length - 1);

    for (let i = 0; i < data[data.length - 1] % myArr.length; i++) {
        myArr.unshift(myArr.pop());
    }

    return myArr.join(' ');
}

console.log(solve(['1',
    '2',
    '3',
    '4',
    '20000000']));