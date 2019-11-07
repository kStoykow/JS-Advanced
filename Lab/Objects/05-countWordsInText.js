function solve(arr) {
    function addPropIfMissing(agg, e) {
        if (!agg.hasOwnProperty(e)) {
            agg[e] = 0;
        }
    };

    return JSON.stringify(arr[0]
        .match(/\w+/g)
        .reduce((result, curr) => {
            addPropIfMissing(result, curr);
            result[curr]++;
            return result;
        }, {}));
}

console.log(solve(['JS devs use Node.js for server-side JS.-- JS for devs']));