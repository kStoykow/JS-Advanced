function solve(kingdoms, fights) {
    function storeKingdoms(acc, k) {
        if (!acc.hasOwnProperty(k)) {
            return acc[k] = {};
        }
    }

    function fillKingdoms(acc, k, g, a) {
        if (!acc[k].hasOwnProperty(g)) {
            acc[k][g] = {};
            acc[k][g]['army'] = Number(a);
            acc[k][g].win = 0;
            acc[k][g].lose = 0;
            return;
        }
        return acc[k][g]['army'] += Number(a);
    }

    function doTheyExist(acc, ak, ag, dk, dg) {
        if (acc[ak].hasOwnProperty(ag) && acc[dk].hasOwnProperty(dg)) {
            return validateFight(acc, ak, ag, dk, dg)
        }
    }

    function validateFight(acc, ak, ag, dk, dg) {
        if (ak !== dk) {
            return fight(acc, ak, ag, dk, dg);
        }
    }

    function fight(acc, ak, ag, dk, dg) {
        if (acc[ak][ag]['army'] > acc[dk][dg]['army']) {

            acc[ak][ag]['army'] *= 1.1;
            acc[ak][ag]['army'] = Math.floor(acc[ak][ag]['army']);
            acc[dk][dg]['army'] *= 0.9;
            acc[dk][dg]['army'] = Math.floor(acc[dk][dg]['army']);
            acc[ak][ag].win += 1;
            acc[dk][dg].lose += 1;
            return;

        } else if (acc[dk][dg]['army'] > acc[ak][ag]['army']) {

            acc[dk][dg]['army'] *= 1.1;
            acc[dk][dg]['army'] = Math.floor(acc[dk][dg]['army']);
            acc[ak][ag]['army'] *= 0.9;
            acc[ak][ag]['army'] = Math.floor(acc[ak][ag]['army']);
            acc[dk][dg].win += 1;
            acc[ak][ag].lose += 1;
            return;
        }
    }

    const winSort = (a, b) => Object.values(b[1]).reduce((a, b) => a + b['win'], 0) - Object.values(a[1]).reduce((a, b) => a + b['win'], 0);
    const loseSort = (a, b) => Object.values(a[1]).reduce((a, b) => a + b['lose'], 0) - Object.values(b[1]).reduce((a, b) => a + b['lose'], 0);
    const alphabetical = (a, b) => a[0].localeCompare(b[0]);

    const sortKingdoms = (a, b) => winSort(a, b) || loseSort(a, b) || alphabetical(a, b);
    const winnerGeneralsSort = (a, b) => b[1]['army'] - a[1]['army'];

    const winnerFormat = ([k, gObj]) => {
        result += `Winner: ${k}\n`;
        Object.entries(gObj)
            .sort(winnerGeneralsSort)
            .map(generalsFormat);
    };
    const generalsFormat = ([g, gVal]) => {
        result += `/\\general: ${g}\n`;
        let [a, w, l] = Object.values(gVal);
        result += `---army: ${a}\n---wins: ${w}\n---losses: ${l}\n`;
    };

    let k = kingdoms.reduce((acc, e) => {
        let [kingdom, g, a] = Object.values(e);
        storeKingdoms(acc, kingdom);
        fillKingdoms(acc, kingdom, g, a);
        return acc;
    }, {});

    let result = '';

    for (const line of fights) {
        let [ak, ag, dk, dg] = line;
        doTheyExist(k, ak, ag, dk, dg);
    }

    Object.entries(k)
        .sort(sortKingdoms)
        .slice(0, 1)
        .map(winnerFormat)

    return result;
}

console.log(
    solve([{ kingdom: "Stonegate", general: "Ulric", army: 5000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
    { kingdom: "YorkenShire", general: "Oah", army: 500 },
    { kingdom: "Maiden Way", general: "Berinon", army: 1000 }],
        [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]

    )
);