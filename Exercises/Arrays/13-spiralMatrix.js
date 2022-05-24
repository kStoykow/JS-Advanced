function solve(x, y) {
    function createMatrix(height) {
        let matrix = [];
        for (let i = 0; i < height; i++) {
            let line = [];
            for (let i = 0; i < height; i++) {
                line.push(0);
            }
            matrix.push(line);
        }
        return matrix;
    }
    let matrix = createMatrix(x);
    let top = 0;
    let bot = x - 1;
    let left = 0;
    let right = y - 1;

    let number = 1;
    let direction = 0;
    const dirMap = {
        0: () => {
            for (let i = left; i <= right; i++) {
                matrix[top][i] = number++;
            }
            top++;
            direction++;
        },
        1: () => {
            for (let i = top; i <= bot; i++) {
                matrix[i][right] = number++;
            }
            right--;
            direction++;
        },
        2: () => {
            for (let i = right; i >= left; i--) {
                matrix[bot][i] = number++;
            }
            bot--;
            direction++;
        },
        3: () => {
            for (let i = bot; i >= top; i--) {
                matrix[i][left] = number++;
            }
            left++;
            direction++;
        },
    }
    while (top <= bot && left <= right) {
        dirMap[direction % 4]();
    }

    return matrix.map(e => e.join(' ')).join('\n');
}
console.log(solve(3, 3));