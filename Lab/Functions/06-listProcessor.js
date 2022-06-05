function solve(arr) {
    let result = [];
    const commands = {
        add: (arr, str) => {
            arr.push(str);
            return arr;
        },
        remove: (arr, str) => {
            let filtered = arr.filter(e => e != str);
            return filtered;
        },
        print: (arr, _) => {
            console.log(arr.join(','));
            return arr;
        },
    }

    arr.forEach(e => {
        const [command, str] = e.split(' ');
        result = commands[command](result, str);
    });
}
solve(['add pesho', 'add george', 'add peter', 'print', 'add peter', 'remove peter', 'print']);