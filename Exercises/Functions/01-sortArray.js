function solve(arr, order) {
    const sortingMap = {
        'asc': (arr) => arr.sort((a, b) => a - b),
        'desc': (arr) => arr.sort((a, b) => b - a),
    }
    return sortingMap[order](arr);
}
console.log(solve([14, 7, 17, 6, 8], 'desc'));