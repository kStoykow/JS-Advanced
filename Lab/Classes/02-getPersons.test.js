const expect = require('chai').expect;
let [first, second, third, fourth] = require('./02-getPersons');

describe('Testing the instances of Person:', () => {
    describe('Testing first instance:', () => {
        it('Should have firstName: "Anna", lastName: "Simpson", age: "22" as number, email: "anna@yahoo.com".', () => {
            expect(first.firstName).to.equal('Anna');
            expect(first.lastName).to.equal('Simpson');
            expect(first.age).to.equal(22);
            expect(typeof first.age).to.equal('number');
            expect(first.email).to.equal('anna@yahoo.com');
        });
        it('Method should return "Anna Simpson (age: 22, email: anna@yahoo.com)"', () => {
            expect(first.toString()).to.equal('Anna Simpson (age: 22, email: anna@yahoo.com)');
        });
    });
    describe('Testing second instance:', () => {
        it('Should have firstName: "SoftUni", lastName: "undefined", age: "undefined", email: "undefined".', () => {
            expect(second.firstName).to.equal('SoftUni');
            expect(second.lastName).to.be.undefined;
            expect(second.age).to.be.undefined
            expect(second.email).to.be.undefined;
        });
        it('Method should return "SuftUni undefined (age: undefined, email: undefined)"', () => {
            expect(second.toString()).to.equal('SoftUni undefined (age: undefined, email: undefined)');
        });
    });
    describe('Testing third instance:', () => {
        it('Should have firstName: "Stephan", lastName: "Johnson", age: "25" as number, email: "undefined".', () => {
            expect(third.firstName).to.equal('Stephan');
            expect(third.lastName).to.equal('Johnson');
            expect(third.age).to.equal(25);
            expect(typeof third.age).to.equal('number');
            expect(third.email).to.be.undefined;
        });
        it('Method should return "Anna Simpson (age: 22, email: anna@yahoo.com)"', () => {
            expect(third.toString()).to.equal('Stephan Johnson (age: 25, email: undefined)');
        });
    });
    describe('Testing fourth instance:', () => {
        it('Should have firstName: "Gabriel", lastName: "Peterson", age: "24" as number, email: "g.p@gmail.com".', () => {
            expect(fourth.firstName).to.equal('Gabriel');
            expect(fourth.lastName).to.equal('Peterson');
            expect(fourth.age).to.equal(24);
            expect(typeof fourth.age).to.equal('number');
            expect(fourth.email).to.equal('g.p@gmail.com');
        });
        it('Method should return "Gabriel Peterson (age: 24, email: g.p@gmail.com)"', () => {
            expect(fourth.toString()).to.equal('Gabriel Peterson (age: 24, email: g.p@gmail.com)');
        });
    });
});