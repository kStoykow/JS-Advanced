function solve(arr) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = 'X';
    let isDraw = false;
    let isWinner = false;
    let r = '';
    function heightWin(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix.every((e) => e[i] == 'X') || matrix.every((e) => e[i] == 'O') == true) {
                return matrix[i][i];
            }
        }
        return false;
    }
    function widthWin(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].every(e => e == 'X') || matrix[i].every(e => e == 'O') == true) {
                return matrix[i][i];
            }
        }
        return false;
    }
    function diagonalWin(matrix) {
        let [d1, d2] = [[], []];
        for (let i = 0; i < matrix.length; i++) {
            d1.push(matrix[i][i]);
            d2.push(matrix[i][matrix.length - 1 - i]);
        }
        if (d1.every(e => e == 'X') || d1.every(e => e == 'O')) {
            return d1[0][0];
        } else if (d2.every(e => e == 'X') || d2.every(e => e == 'O')) {
            return d2[0][0];
        }
        return false;
    }

    for (const str of arr) {
        let [row, e] = str.split(' ').map(Number);
        if (board.flat().every(e => e != false) == true) {
            isDraw = true;
            break;
        }

        if (board[row][e] == false) {
            board[row][e] = player;
            player = player == 'O' ? 'X' : 'O';
            if (heightWin(board) != false) {
                r += `Player ${heightWin(board)} wins!\n`;
                isWinner = true;
                break;
            }
            if (widthWin(board) != false) {
                r += `Player ${widthWin(board)} wins!\n`;
                isWinner = true;
                break;
            }
            if (diagonalWin(board) != false) {
                r += `Player ${diagonalWin(board)} wins!\n`;
                isWinner = true;
                break;
            }

        } else {
            r += 'This place is already taken. Please choose another!\n';
        }
    }
    if (isDraw == true || isWinner == false) {
        r += 'The game ended! Nobody wins :(\n';
    }
    r += `${board.map(e => e.join('\t')).join('\n')}`;
    return r;
}
console.log(solve(['0 1',
]
));
