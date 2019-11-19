function solve(data) {
    let result = 0;

    function heightNeighbors(a, b) {
        return a.filter((e, i) => b[i] === e).length;
    }
    
    function widthNeighbors(a) {
        let result = 0;

        for (let i = 1; i < a.length; i++) {
            if (a[i] == a[i - 1]) {
                result++;
            }
        }
        return result;
    }

    for (let i = 0; i < data.length - 1; i++) {
        result += heightNeighbors(data[i], data[i + 1]);
        result += widthNeighbors(data[i]);
        if (i == data.length - 2) {
            result += widthNeighbors(data[i + 1]);
        }
    }

    return result;
}

console.log(solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));