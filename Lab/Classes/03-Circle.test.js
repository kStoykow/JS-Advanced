const expect = require('chai').expect;
const Circle = require('./03-Circle');

let firstCircle = new Circle(2);
let changed = new Circle(2);
changed.diameter = 1.6;

describe('Testing class Circle functionality:', () => {
    describe('Its radius should be set trough constructor:', () => {
        it('Should equals 2 for firstCircle.', () => {
            expect(firstCircle.radius).to.equal(2);
        });
    });
    describe('Its diameter should be calculated trough getter:', () => {
        it('Should equals 4 for firstCircle.', () => {
            expect(firstCircle.diameter).to.equal(4);
        });
    });
    describe('Its area should be calculated trough getter:', () => {
        it('Should equals 12.566370614359172 for firstCircle.', () => {
            expect(firstCircle.area).to.equal(12.566370614359172);
        });
    });

    describe('Testing again, after changing diameter:', () => {
        it('Radius now should equal 0.8:', () => {
            expect(changed.radius).to.equal(0.8);
        });
        it('Diameter now should equal 1.6:', () => {
            expect(changed.diameter).to.equal(1.6);
        });
        it('Area now should equal 2.0106192982974678:', () => {
            expect(changed.area).to.equal(2.0106192982974678);
        });
    });
});
