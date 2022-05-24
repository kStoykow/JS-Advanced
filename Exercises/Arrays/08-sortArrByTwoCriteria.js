function solve(arr) {
    return arr.sort((a, b) => a.length - b.length || a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())).join('\n');
}
console.log(solve(['Alpha', 'alpha',
    'beta',
    'gamma']
));