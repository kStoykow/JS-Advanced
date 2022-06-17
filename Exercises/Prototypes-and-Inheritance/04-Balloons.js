function solve() {
    function Balloon(color, hasWeight) {
        this.color = color;
        this.hasWeight = hasWeight;
    }

    function PartyBalloon(color, hasWeight, ribbonColor, ribbonLength) {
        this.color = color;
        this.hasWeight = hasWeight;
        this._ribbon = { color: ribbonColor, length: ribbonLength };

        Object.defineProperty(this, 'ribbon', {
            get() { return this._ribbon; }
        });
    }

    function BirthdayBalloon(color, hasWeight, ribbonColor, ribbonLength, text) {
        this.color = color;
        this.hasWeight = hasWeight;
        this._ribbon = { color: ribbonColor, length: ribbonLength };
        this._text = text;

        Object.defineProperty(this, 'ribbon', {
            get() { return this._ribbon; }
        });
        Object.defineProperty(this, 'text', {
            get() { return this._text; }
        });
    }

    Object.setPrototypeOf(PartyBalloon, Balloon);
    Object.setPrototypeOf(BirthdayBalloon, PartyBalloon);

    return { Balloon, PartyBalloon, BirthdayBalloon }
}

let classes = solve();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let asd = new classes.BirthdayBalloon("yellow", 20.5, "red", 10.25, 'asd');
let ribbon = testPartyBalloon.ribbon;
let text = asd.text;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
console.log(asd.ribbon);
console.log(text);