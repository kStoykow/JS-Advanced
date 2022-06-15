class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${(this.value.toString(16)).toUpperCase()}`;
    }

    plus(num) {
        return new Hex(this.value + num.valueOf());
    }

    minus(num) {
        return new Hex(this.value - num.valueOf());
    }

    parse(string) {
        return parseInt(string, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));

let ab = new Hex(10);
let bb = new Hex(5);
let c = new Hex(155);
let act2 = ab.plus(c).toString();
let act3 = ab.minus(bb).toString();

console.log(act2);
console.log(act3);