const expect = require('chai').expect;
const Point = require('./04-PointDistance');

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(p1);

describe('Testing Point class:', () => {
    describe('Testing first point:', () => {
        it('Should have property "x".', () => {
            expect(p1).to.have.property('x');
        });
        it('Should have property "y".', () => {
            expect(p1).to.have.property('y');
        });
    });

    describe('Testing second point:', () => {
        it('Should have property "x".', () => {
            expect(p2).to.have.property('x');
        });
        it('Should have property "y".', () => {
            expect(p2).to.have.property('y');
        });
    });

    describe('Testing static method of Point class:', () => {
        it('Point class should not have public distance method', () => {
            expect(p1).to.not.have.property('distance');
        })
        it('Should return throw TypeError if called on instance.', () => {
            expect(function () { p1.distance(p1, p2) }).to.throw(TypeError);
        });
        it('Should be called upon Class with properties point1, point2.', () => {
            expect(Point.distance(p1, p2)).to.equal(5);
        });
    });
});