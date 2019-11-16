function solve(data) {
    return data
    .filter((e, i) => i % 2 == 0)
    .join(' ')

}

console.log(
    solve(['JS'])
);