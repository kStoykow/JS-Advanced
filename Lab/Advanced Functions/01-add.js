function solution(number) {
    return function (x) {
        return number + x;
    }
}

let add5 = solution(5);

console.log(
    add5(2),
    add5(3)
);
