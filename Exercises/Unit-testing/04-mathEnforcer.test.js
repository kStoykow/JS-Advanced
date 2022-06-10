const expect = require('chai').expect;
const mathEnforcer = require('./04-mathEnforcer');

describe('Testing mathEnforcer object:', () => {
    describe('It should have three methods:', () => {
        it('Should have addFive method.', () => {
            expect(typeof mathEnforcer.addFive).to.equals('function');
        });
        it('Should have subtractTen method.', () => {
            expect(typeof mathEnforcer.subtractTen).to.equals('function');
        });
        it('Should have sum method.', () => {
            expect(typeof mathEnforcer.sum).to.equals('function');
        });
    });

    describe('Testing addFive method:', () => {
        it('Working test: It should return 6 for addFive(1) /adding 5 to param/.', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });
        it('Working test: It should return 5.1 for addFive(0.1).', () => {
            expect(mathEnforcer.addFive(0.1)).to.equal(5.1);
        });
        it('Working test: It should return 4.9 for addFive(-0.1).', () => {
            expect(mathEnforcer.addFive(-0.1)).to.equal(4.9);
        });
        it('It should return undefined for any non-number input.', () => {
            expect(mathEnforcer.addFive('1')).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(function () { })).to.equal(undefined);
            expect(mathEnforcer.addFive(true)).to.equal(undefined);
        });
    });

    describe('Testing subtractTen method:', () => {
        it('Working test: It should return -9 for subtract(1) /subtracting 10 from param/.', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
        });
        it('Working test: It should return -9.9 for subtractTen(0.1).', () => {
            expect(mathEnforcer.subtractTen(0.1)).to.equal(-9.9);
        });
        it('Working test: It should return -10.1 for subtractTen(-0.1).', () => {
            expect(mathEnforcer.subtractTen(-0.1)).to.equal(-10.1);
        });
        it('Should return undefined for any non-number input.', () => {
            expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(function () { })).to.equal(undefined);
            expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
        });
    });

    describe('Testing sum method:', () => {
        it('Working test: It should return 2 for sum(1, 1).', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });
        it('Working test: It should return 1.19 for sum(1, 0.1).', () => {
            expect(mathEnforcer.sum(1, 0.1)).to.equal(1.1);
        });
        it('Working test: It should return 0 for sum(1, -1).', () => {
            expect(mathEnforcer.sum(1, -1)).to.equal(0);
        });
        it('Working test: It should return closeTo 0.3 with 0.01 delta for sum(0.1, 0.2).', () => {
            expect(mathEnforcer.sum(0.1, 0.2)).to.be.closeTo(0.3, 0.01);
        });
        it('Should return undefined for any non-number input.', () => {
            expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
            expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, [])).to.equal(undefined);
            expect(mathEnforcer.sum([], 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, {})).to.equal(undefined);
            expect(mathEnforcer.sum({}, 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, null)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(undefined, 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, function () { })).to.equal(undefined);
            expect(mathEnforcer.sum(function () { }, 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, true)).to.equal(undefined);
            expect(mathEnforcer.sum(true, 1)).to.equal(undefined);
        });
    });
});