function solve(data) {
    function addSystemIfMissing(acc, s) {
        if (!acc.hasOwnProperty(s)) {
            return acc[s] = {};
        }
    }

    function addCompIfMissing(acc, s, c) {
        if (!acc[s].hasOwnProperty(c)) {
            return acc[s][c] = [];
        }
    }

    function fillTheRegister(acc, s, c, sub) {
        acc[s][c].push(sub);
    }

    const systemSort = (a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]);
    const systemFormat = ([s, compObj]) => {
        result += `${s}\n`;
        Object.entries(compObj)
            .sort(compSort)
            .map(compFormat)
    };
    const compSort = (a, b) => b[1].length - a[1].length;
    const compFormat = ([comp, arr]) => {
        result += `|||${comp}\n`;
        arr.map(subCompsFormat);
    };
    const subCompsFormat = e => result += `||||||${e}\n`;

    let result = '';

    Object.entries(data.reduce((acc, e) => {
        let [system, comp, sub] = e.split(' | ');
        addSystemIfMissing(acc, system);
        addCompIfMissing(acc, system, comp);
        fillTheRegister(acc, system, comp, sub);
        return acc;
    }, {}))
        .sort(systemSort)
        .map(systemFormat);
    return result;
}

console.log(
    solve(['SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security']
    )
);