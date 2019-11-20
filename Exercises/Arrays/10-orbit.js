function solve(data) {
    let [width, height, x, y] = data;
    let matrix = [];
    
    function buildInitialMatrix(matrix, row, x, y) {
        for (let i = 0; i < row; i++) {
            matrix.push([]);
        }
        matrix[x][y] = 1;

        return matrix;
    }

    function processMatrix(m) {
        return m.reduce((acc, e) => {
            acc.push(e.join(' '))
            return acc;
        }, []);
    }

    buildInitialMatrix(matrix, height, x, y)

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    return processMatrix(matrix).join('\n');
}

console.log(solve([3, 3, 1, 1]));