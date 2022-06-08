const expect = require('chai').expect;
const rgbToHexColor = require('./06-rgbToHex');

describe("Working test", () => {
    it("tests with zeros", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
    it("Tests with 255", () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
    it("Should return #AAB4BE for (170, 180, 190)", () => {
        expect(rgbToHexColor(170, 180, 190)).to.equal("#AAB4BE");
    });
    it("Should pad trailing zeroes, #100101 for (16, 1, 1)", () => {
        expect(rgbToHexColor(16, 1, 1)).to.equal("#100101");
    });
    it('Should return undefined if some of the args is not in range', () => {
        expect(rgbToHexColor(-1, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, -1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 1, -1)).to.equal(undefined);
        expect(rgbToHexColor(256, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 256, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 1, 256)).to.equal(undefined);
    });
    it('Should return undefined if some of the args is not integer', () => {
        expect(rgbToHexColor(0.1, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 0.1, 1)).to.equal(undefined);
        expect(rgbToHexColor(1, 1, 0.1)).to.equal(undefined);
    });

    it('Should return undefined if some of the args is wrong type', () => {
        expect(rgbToHexColor()).to.equal(undefined);
        expect(rgbToHexColor([], 1, 1)).to.equal(undefined);
        expect(rgbToHexColor({}, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor('1', 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(null, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(true, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(undefined, 1, 1)).to.equal(undefined);
        expect(rgbToHexColor(function () { }, 1, 1)).to.equal(undefined);
    });
});