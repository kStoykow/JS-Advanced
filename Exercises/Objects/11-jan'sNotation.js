function solve(data) {
    let r = '';
    let isError = false;
    const operandsMap = {
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };
    const saveOrDo = {
        'number': (arr, n, _) => {
            arr.push(n);
        },
        'string': (arr, x, map) => {
            if (arr.length >= 2) {
                arr.splice(arr.length - 2, 2, map[x](...arr.slice(-2)));
            } else {
                isError = true;
            }
        }
    }
    function outputHandler(arr, bool, r) {
        if (arr.length > 1) {
            r += 'Error: too many operands!\n';
            return r;
        } else if (arr.length == 1 && bool == false) {
            return arr[0];
        }

        r += 'Error: not enough operands!\n';
        return r;
    }

    let arr = [];

    for (const e of data) {
        if (isError == false) {
            saveOrDo[typeof e](arr, e, operandsMap);
        } else {
            r += 'Error: not enough operands!\n';
            return r;
        }
    }

    return outputHandler(arr, isError, r);
}
console.log(solve([5,
    3,
    '*', '/'
]
));