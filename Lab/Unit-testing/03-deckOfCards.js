function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const cardSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        let card = {
            face,
            suit,
            toString() {
                return face + cardSuits[suit];
            }
        }

        if (cardFaces.includes(face) == false || cardSuits[suit] == undefined) {
            throw new Error('Error');
        }
        return card;
    }

    let r = [];

    for (const e of cards) {
        try {
            let face = e.slice(0, e.length - 1);
            let suit = e.slice(-1);
            let curr = createCard(face, suit).toString();
            r.push(curr);
        } catch (error) {
            return `Invalid card: ${e}`;
        }

    }

    console.log(r.join(' '));
}

let a = printDeckOfCards(['5S', '3D', 'QK', '1C']);
console.log(a);