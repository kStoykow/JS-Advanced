function solution(n) {
    function add(x, y) {
        return x + y;
    }
    return add.bind(this, n);
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));