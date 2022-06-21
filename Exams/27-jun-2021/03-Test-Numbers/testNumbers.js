const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

const { expect } = require("chai");

describe("Tests …", () => {
    describe("sumNumber", () => {
        it('Params check: return undefined if not type number', () => {
            expect(testNumbers.sumNumbers('', [])).to.be.undefined;
            expect(testNumbers.sumNumbers({}, undefined)).to.be.undefined;
            expect(testNumbers.sumNumbers(function () { }, null)).to.be.undefined;
        });

        it('returns sum of 2 params rounded to 2 numbers after decimal point.', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(1.1, 1.1)).to.equal('2.20');
            expect(testNumbers.sumNumbers(-1, 1)).to.equal('0.00');
            expect(testNumbers.sumNumbers(-1.1, 1.1)).to.equal('0.00');
        });
    });

    describe("numberChecker", () => {
        it("Parses the input to number, Throws error if input is not a number", () => {
            expect(() => testNumbers.numberChecker('string')).to.Throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker(['as'])).to.Throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker({})).to.Throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker(undefined)).to.Throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker(function () { })).to.Throw(Error, 'The input is not a number!');
        });
        it('Checks the input number. Returns if input is odd or even', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(['1'])).to.equal('The number is odd!');

            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
            expect(testNumbers.numberChecker(['2'])).to.equal('The number is even!');
        })
    });

    describe("averageSumArray", () => {
        it("Returns the average sum of the elements", () => {
            expect(testNumbers.averageSumArray([1, 1, 1])).to.equal(1);
            expect(testNumbers.averageSumArray([0, 0, 3])).to.equal(1);
            expect(testNumbers.averageSumArray([0, 0])).to.equal(0);
            expect(testNumbers.averageSumArray([0, 0, 7])).to.equal(2.3333333333333335);
            expect(testNumbers.averageSumArray([1.1, 1.1])).to.equal(1.1);
        });
    });
});