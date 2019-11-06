function solve(params) {
    let [x1, y1, x2, y2] = params;

    const oneToZero = function (x1, y1, x2, y2) {
        let xs = 0 - x1;
        let ys = 0 - y1;
        xs *= xs;
        ys *= ys;
        return Math.sqrt(xs + ys);
    };
    const twoToZero = function (x1, y1, x2, y2) {
        let xs = x2 - 0;
        let ys = y2 - 0;
        xs *= xs;
        ys *= ys;
        return Math.sqrt(xs + ys);
    };
    const betweenPoints = function (x1, y1, x2, y2) {
        let xs = x2 - x1;
        let ys = y2 - y1;
        xs *= xs;
        ys *= ys;
        return Math.sqrt(xs + ys);
    };

    let result = (Number.isInteger(oneToZero(x1, y1, x2, y2))
        ? `{${x1}, ${y1}} to {0, 0} is valid\n`
        : `{${x1}, ${y1}} to {0, 0} is invalid\n`) +
        (Number.isInteger(twoToZero(x1, y1, x2, y2))
            ? `{${x2}, ${y2}} to {0, 0} is valid\n`
            : `{${x2}, ${y2}} to {0, 0} is invalid\n`) +
        (Number.isInteger(betweenPoints(x1, y1, x2, y2))
            ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid\n`
            : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid\n`);

    return result;
}

console.log(solve([2, 1, 1, 1]));