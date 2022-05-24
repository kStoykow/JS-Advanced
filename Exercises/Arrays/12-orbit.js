function solve(arr) {
    let [width, height, x, y] = arr;

    function createMatrix(height) {
        let matrix = [];
        for (let i = 0; i < height; i++) {
            matrix.push([]);
        }
        return matrix;
    }

    let matrix = createMatrix(height);
    for (let i = 0; i < height; i++) {
        for (let z = 0; z < width; z++) {
            matrix[i][z] = Math.max(Math.abs(i - x), Math.abs(z - y)) + 1;
        }
    }

    return matrix.map(e => e.join(' ')).join('\n');
}
console.log(solve([5, 5, 1, 2]));