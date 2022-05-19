function solve(str) {
    return str.match(/\w+/g).map(e => e.toLocaleUpperCase()).join(', ');
}
console.log(solve('Hi, how are you?'));