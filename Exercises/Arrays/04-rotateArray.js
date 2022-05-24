function solve(arr, rotates) {
    for (let i = 0; i < rotates % arr.length; i++) {
        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}
console.log(solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15

));