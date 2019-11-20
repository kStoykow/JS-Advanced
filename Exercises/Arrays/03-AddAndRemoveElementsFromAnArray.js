function solve(data) {
    let commandMap = {
        add: 'push',
        remove: 'pop',
    }

    let val = 1;
    let result = [];

    function processResult(arr, val, command) {
        arr[commandMap[command]](val);
        return;
    }

    function returnResult(arr) {
        if (arr.length == 0) {
            return 'Empty';
        }
        return arr.join('\n');
    }

    for (const command of data) {
        processResult(result, val, command);
        val++;
    }

    return returnResult(result);
}

console.log(solve([
    'add',
    'remove',
    'add']
));