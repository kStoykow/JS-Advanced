function solve(data) {
    function setFirst(agg, element) {
        if (agg.length == 0) {
            return agg.push(element);
        }
    }

    function setBiggestElement(agg, element) {
        if (agg[agg.length - 1] <= element) {
            return agg.push(element);
        }

        setFirst(agg, element);
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