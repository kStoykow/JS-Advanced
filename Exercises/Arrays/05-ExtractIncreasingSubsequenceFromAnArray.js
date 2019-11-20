function solve(data) {
    function setFirst(a, e) {
        if (a.length == 0) {
            return a.push(e);
        }
    }

    function setBiggestElement(a, e) {
        if (a[a.length - 1] <= e) {
            return a.push(e);
        }

        setFirst(a, e);
    }

    return data
        .reduce((a, e) => {
            setBiggestElement(a, e);
            return a;
        }, [])
        .join('\n');
}

console.log(solve([
    3,
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));