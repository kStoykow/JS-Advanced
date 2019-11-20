function solve(data) {
    let matrix = data.reduce((acc, e, i) => {
        let row = e.split(' ');
        acc[i] = row.map(Number);
        return acc;
    }, []);

    let leftDiagonal = matrix.reduce((acc, e, i) => acc + e[i], 0);
    let rightDiagonal = matrix.reduce((acc, e, i) => acc + e[e.length - 1 - i], 0);

    function changeNonDiagonals(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row != col && row != matrix.length - 1 - col) {
                    matrix[row][col] = leftDiagonal;
                }
            }
        }
    }

    let result = '';

    if (leftDiagonal !== rightDiagonal) {
        result = matrix.reduce((acc, e) => {
            acc.push(e.join(' '))
            return acc;
        }, []);

    } else {
        changeNonDiagonals(matrix);
        result = matrix.reduce((acc, e) => {
            acc.push(e.join(' '))
            return acc;
        }, []);
    }

    return result.join('\n');
}

console.log(solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
));