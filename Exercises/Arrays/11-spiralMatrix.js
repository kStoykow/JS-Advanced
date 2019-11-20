function solve(rows, cols) {
    let matrix = [];
    function createMatrix(matrix, x, y) {
        for (let row = 0; row < x; row++) {
            matrix[row] = [];
            for (let col = 0; col < y; col++) {
                matrix[row].push(0)

            }
        }
        return matrix;
    }

    function processMatrix(matrix) {
        return matrix.reduce((acc, e) => {
            acc.push(e.join(' '))
            return acc;
        }, []);
    }

    createMatrix(matrix, rows, cols);

    function fillMatrix(matrix, rows, cols) {
        let [num, maxNum, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows - 1, cols - 1];

        while (num < maxNum) {
            for (let col = minCol; col <= maxCol; col++) {
                matrix[minRow][col] = ++num;
            }
            minRow++;

            for (let row = minRow; row <= maxRow; row++) {
                matrix[row][maxRow] = ++num;
            }
            maxCol--;

            for (let col = maxCol; col >= minCol; col--) {
                matrix[maxRow][col] = ++num;
            }
            maxRow--;

            for (let row = maxRow; row >= minRow; row--) {
                matrix[row][minCol] = ++num;
            }
            minCol++;
        }
        return matrix;
    }

    fillMatrix(matrix, rows, cols);

    return processMatrix(matrix).join('\n');
}

console.log(solve(5, 5));