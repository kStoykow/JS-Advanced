function solve(arr) {
    let r = {};

    for (let i = 0; i < arr.length; i += 2) {
        r[arr[i]] = Number(arr[i + 1]);
    }
    return r;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));