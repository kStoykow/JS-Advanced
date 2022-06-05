function getFibonator() {
    let seq = [0, 1];
    return function calc() {
        seq.push(seq.slice(-2).reduce((a, b) => a + b));
        return seq[seq.length - 2];
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13