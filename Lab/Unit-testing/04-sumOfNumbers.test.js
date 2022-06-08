const expect = require('chai').expect;
const sum = require('./04-sumOfNumbers');


describe('Testing function Sum', () => {
    it('Testing positive numbers sum 1 + 1', () => {
        expect(sum([1, 1])).to.be.equal(2);
    });

    it('Testing negative numbers sum 1 + -1', () => {
        () => expect(sum([1, -1])).to.be.equal(0);
    });

    it('Testing sum of zeroes 0 + 0', () => {
        expect(sum([0, 0])).to.be.equal(0);
    });
    it('Testing sum of empty array', () => {
        expect(sum([])).to.be.equal(0);
    });
})