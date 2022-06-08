function cardFactoryAndValidator(face, suit) {
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

    if (cardFaces.includes(face) !== true || cardSuits[suit] == undefined) {
        throw new Error('Error');
    }
    return card;
}

let result = cardFactoryAndValidator('a', 'S');
result.toString();
