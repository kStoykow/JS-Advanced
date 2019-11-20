function solve(data) {
    let isSame = true;
    let r = data[0].reduce((a, e) => a + e, 0);
    let c = data.reduce((a, e) => a + e[0], 0);

    function validateMatrice(row, column, currentRow, currentColumn) {
        if ((currentRow !== currentColumn) || (row != currentRow) || (column != currentColumn)) {
            return isSame = false;
        }
    }

    for (let i = 0; i < data.length; i++) {
        let cr = data[i].reduce((a, e) => a + e, 0);
        let cc = data.reduce((a, e) => a + e[i], 0);

        validateMatrice(r, c, cr, cc);

        if (isSame === false) {
            break;
        }
    }

    return isSame;
}

console.log(solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));