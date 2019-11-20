function solve(data) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];

    let result = '';
    let currMove = 'X';

    function isThereAviableMoves(board) {
        let isThereMoves = false;

        for (let i = 0; i < board.length; i++) {
            if (board[i].includes(false)) {
                isThereMoves = true;
            }
        }
        return isThereMoves;
    }

    function makeAMoveIfValid(board, row, col, i) {
        if (board[row][col] !== false) {
            return result += "This place is already taken. Please choose another!\n";
        }

        board[row][col] = currMove;
        currMove == 'O' ? currMove = 'X' : currMove = 'O';
        return;
    }

    let winner = '';

    const rowWinX = e => e == 'X';
    const rowWinO = e => e == 'O';

    function checkIfWin(board) {
        let isWin = false;

        if (board.reduce((acc, e, i) => acc + e[i], '') == 'XXX') {
            winner = 'X';
            isWin = true;
            return isWin;
        }

        if (board.reduce((acc, e, i) => acc + e[i], '') == 'OOO') {
            winner = 'O';
            isWin = true;
            return isWin;
        }

        if (board.reduce((acc, e, i) => acc + e[e.length - 1 - i], '') == 'XXX') {
            winner = 'X';
            isWin = true;
            return isWin;
        }

        if (board.reduce((acc, e, i) => acc + e[e.length - 1 - i], '') == 'OOO') {
            winner = 'O';
            isWin = true;
            return isWin;
        }

        for (let i = 0; i < board.length; i++) {
            if (board[i].every(rowWinX)) {
                winner = 'X';
                isWin = true;
            }

            if (board[i].every(rowWinO)) {
                winner = 'O';
                isWin = true;
            }

            if (board.reduce((acc, e) => acc + e[i], '') === 'XXX') {
                winner = 'X';
                isWin = true;
            }

            if (board.reduce((acc, e) => acc + e[i], '') === 'OOO') {
                winner = 'O';
                isWin = true;
            }
        }
        return isWin;
    }

    function processBoard(board) {
        return board.reduce((acc, e) => {
            acc.push(e.join('\t'))
            return acc;
        }, []);
    }

    for (let i = 0; i < data.length; i++) {
        let [row, col] = data[i].split(' ');
        makeAMoveIfValid(board, row, col, i);

        if (checkIfWin(board) == true) {
            result += `Player ${winner} wins!\n${processBoard(board).join('\n')}`;
            break;
        }

        if (isThereAviableMoves(board) == false) {
            result += `The game ended! Nobody wins :(\n${processBoard(board).join('\n')}`;
            break;
        }
    }

    return result;
}

console.log(solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]));