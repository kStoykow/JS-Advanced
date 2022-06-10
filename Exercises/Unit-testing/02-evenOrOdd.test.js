const expect = require('chai').expect;
const isOddOrEven = require('./02-evenOrOdd');

describe('Testing function that tells if string length is odd or even', () => {
    describe('Should return undefined if parameter is not string', () => {
        it('Must return undefined if prop is number/array/object/null/undefined/function or no argument passed', () => {
            expect(isOddOrEven(1)).to.equal(undefined);
            expect(isOddOrEven([])).to.equal(undefined);
            expect(isOddOrEven({})).to.equal(undefined);
            expect(isOddOrEven(null)).to.equal(undefined);
            expect(isOddOrEven(undefined)).to.equal(undefined);
            expect(isOddOrEven(function () { })).to.equal(undefined);
            expect(isOddOrEven()).to.equal(undefined);
        });
    });

    describe('Working tests', () => {
        it('Should return odd if string with odd length is passed', () => {
            expect(isOddOrEven('a')).to.equal('odd');
        });
        it('Should return even if string with even length is passed', () => {
            expect(isOddOrEven('aa')).to.equal('even');
        });
    });
});