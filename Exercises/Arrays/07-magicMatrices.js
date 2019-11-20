function solve(data) {
    let isSame = true;
    let rows = data[0].reduce((a, e) => a + e, 0);
    let cols = data.reduce((a, e) => a + e[0], 0);

    function validateMatrice(r, c, cr, cc) {
        if ((cr !== cc) || (r != cr) || (c != cc)) {
            return isSame = false;
        }
    }

    for (let i = 0; i < data.length; i++) {
        let currRow = data[i].reduce((a, e) => a + e, 0);
        let currColumn = data.reduce((a, e) => a + e[i], 0);

        validateMatrice(rows, cols, currRow, currColumn);

        if (isSame === false) {
            break;
        }
    }

    return isSame;
}

console.log(solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));