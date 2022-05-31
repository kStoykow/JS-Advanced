function solve(arr) {
    function stringSerialize(str) {
        return str.split('|').filter(e => e != '').map(e => e.trim());
    }
    const parseIfNumber = (e) => isNaN(Number(e)) == true ? e : Math.round(Number(e) * 100) / 100;

    let keys = stringSerialize(arr[0]);

    let data = arr.slice(1).reduce((a, b) => {
        let vals = stringSerialize(b).map(parseIfNumber);

        a.push(keys.reduce((a, b, i) => {
            a[b] = vals[i];
            return a;
        }, {}));

        return a;
    }, []);

    return JSON.stringify(data);
}
console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));