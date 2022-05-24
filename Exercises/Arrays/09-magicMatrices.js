function solve(arr) {
    let init = arr[0].reduce((a, b) => a + b);
    function widthAggregateCheck(matrix, i, init) {
        return matrix[i].reduce((a, b) => a + b, 0) == init ? true : false;
    }

    function heightAggregateCheck(matrix, i, init) {
        return matrix.reduce((a, b) => a + b[i], 0) == init ? true : false;
    }
    let isMagical = true;

    for (let i = 0; i < arr.length; i++) {
        if (widthAggregateCheck(arr, i, init) == false || heightAggregateCheck(arr, i, init) == false) {
            isMagical = false;
            break;
        }
    }
    return isMagical;
}
console.log(solve([
    [5, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));