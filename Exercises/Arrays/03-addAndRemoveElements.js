function solve(arr) {
    const arrMap = { add: 'push', remove: 'pop', };
    let init = 1;
    let r = arr.reduce((a, b) => {
        a[arrMap[b]](init);
        init++;
        return a;
    }, []);

    return r.length > 0 ? r.join('\n') : 'Empty';
}
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));