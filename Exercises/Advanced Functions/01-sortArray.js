function solve(arr, o) {
    function asc(a) {
        return a.sort((a, b) => a - b);
    }
    function desc(a) {
        return a.sort((a, b) => b - a);
    }
    
    orderMap = {
        asc: asc,
        desc: desc
    }

    return orderMap[o](arr);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));