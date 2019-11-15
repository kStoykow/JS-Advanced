function solve(data) {
    function createCharIfMissing(a, n) {
        if (!a.hasOwnProperty(n)) {
            return a[n] = {};
        }
    }

    function addSpells(a, n, s, d) {
        if (!a[n].hasOwnProperty(s)) {
            return a[n][s] = Number(d);
        }
        return updateSpells(a, n, s, d)
    }

    function updateSpells(a, n, s, d) {
        if (a[n][s] < Number(d)) {
            return a[n][s] = Number(d);
        }
    }

    function fight(a, c, c2) {
        if (a.hasOwnProperty(c) && a.hasOwnProperty(c2)) {
            return commonSpellsChecker(a, c, c2);
        }
    }

    function commonSpellsChecker(a, c, c2) {
        let charSpells = Object.keys(a[c]);
        let char2Spells = Object.keys(a[c2]);
        let commonSpell = charSpells.filter(e => char2Spells.includes(e));

        if (commonSpell.length != 0) {
            return getWinner(a, c, c2, commonSpell);
        }
    }

    function getWinner(a, c, c2, spell) {
        if (a[c][spell[0]] > a[c2][spell[0]]) {
            return delete a[c2];
        }
        return delete a[c];
    }

    const dmgSum = (o) => Object.values(o).reduce((a, b) => a + b, 0);
    const gladiatorSort = (a, b) => dmgSum(b[1]) - dmgSum(a[1]) || a[0].localeCompare(b[0]);
    const spellsSort = (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]);
    const gladiatorFormat = ([n, s]) => {
        result += `${n}: ${dmgSum(s)} skill\n`;
        Object.entries(s)
            .sort(spellsSort)
            .map(spellsFormat);
    };
    const spellsFormat = ([s, d]) => {
        result += `- ${s} <!> ${d}\n`;
    };
    
    let acc = {};
    let result = '';

    for (let line of data) {
        if (line == 'Ave Cesar') {
            break;
        }

        else if (line.includes(' -> ')) {
            let [name, spell, dmg] = line.split(' -> ');
            createCharIfMissing(acc, name);
            addSpells(acc, name, spell, dmg);

        } else if (line.includes(' vs ')) {
            let [char, char2] = line.split(' vs ');
            fight(acc, char, char2);
        }
    }

    Object.entries(acc)
        .sort(gladiatorSort)
        .map(gladiatorFormat);

    return result;
}

console.log(
    solve(['Pesho -> Duck -> 600',
        'Julius -> Ahield -> 260',
        'Julius -> Heal -> 260',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Pesho vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Gosho',
        'Ave Cesar']
    )
);