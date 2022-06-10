const expect = require('chai').expect;
const lookupChar = require('./03-charLookup');

describe('Testing lookupChar function:', () => {
    describe('Testing if input data is valid:', () => {
        it('Expect prop1 to be string, return undefined if not.', () => {
            expect(lookupChar(111, 0)).to.equal(undefined);
            expect(lookupChar(null, 0)).to.equal(undefined);
            expect(lookupChar(undefined, 0)).to.equal(undefined);
            expect(lookupChar(function () { }, 0)).to.equal(undefined);
            expect(lookupChar({}, 0)).to.equal(undefined);
            expect(lookupChar([], 0)).to.equal(undefined);
        });

        it('Expect prop2 to be Integer, return undefined if not.', () => {
            expect(lookupChar('string', 0.1)).to.equal(undefined);
        });
    });

    describe('Working test:', () => {
        it('Should return "s" for: lookupChar("string", 0).', () => {
            expect(lookupChar('string', 0)).to.equal('s');
        });
        it('Should return "t" for: lookupChar("string", 1).', () => {
            expect(lookupChar('string', 1)).to.equal('t');
        });
        it('Should return "g" for: lookupChar("string", 5).', () => {
            expect(lookupChar('string', 5)).to.equal('g');
        });
        it('Should return " " for: lookupChar(" ", 0).', () => {
            expect(lookupChar(' ', 0)).to.equal(' ');
        });
    });

    describe('Testing if out of range index works:', () => {
        it('Should return "Incorrect index" if index is lower than 0.', () => {
            expect(lookupChar('string', -1)).to.equal('Incorrect index');
        });
        it('Should return "Incorrect index" for: lookupChar("", 3).', () => {
            expect(lookupChar('', 3)).to.equal('Incorrect index');
        });
        it('Should return "Incorrect index" if index is bigger or equal to string length.', () => {
            expect(lookupChar('string', 6)).to.equal('Incorrect index');
        });
    });
});