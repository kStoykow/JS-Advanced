const expect = require('chai').expect;
const Person = require('./01-Person');

let firstPerson = new Person('Ivan', 'Petrow', 24, 'qwe@qwe.qwe');
let secondPerson = new Person('Pesho', 'Peshew', 30, 'asd@asd.asd');

describe('Testing Person Class:', () => {
    describe('It should intialize props: firstName, lastName, age, email:', () => {
        it('firstPerson Should have "Ivan", "Petrow", 24, "qwe@qwe.qwe" props and toString method.', () => {
            expect(firstPerson).to.have.property('firstName');
            expect(firstPerson).to.have.property('lastName');
            expect(firstPerson).to.have.property('age');
            expect(firstPerson).to.have.property('email');
            expect(typeof firstPerson.toString).to.equal('function');
        });
    });
    describe('Checking values:', () => {
        describe('General tests:', () => {
            it('firstName should equals "Ivan".', () => {
                expect(firstPerson.firstName).to.equal('Ivan');
            });
            it('lastName should equals "Petrow".', () => {
                expect(firstPerson.lastName).to.equal('Petrow');
            });
            it('age should equals "24".', () => {
                expect(firstPerson.age).to.equal(24);
            });
            it('email should equals "qwe@qwe.qwe".', () => {
                expect(firstPerson.email).to.equal('qwe@qwe.qwe');
            });
        });
        describe('Testing method toString():', () => {
            it('Should return to "Ivan Petrow (age: 24, email: qwe@qwe.qwe)"', () => {
                expect(firstPerson.toString()).to.equal('Ivan Petrow (age: 24, email: qwe@qwe.qwe)');
            });
        });
    });
    describe('Checking instances and comparing them:', () => {
        it('firstPeson should be instanceof Person.', () => {
            expect(firstPerson instanceof Person).to.be.true;
        });
        it('secondPerson should be instanceof Person', () => {
            expect(secondPerson instanceof Person).to.be.true;
        });
        it('firstPeson.toString() should differ secondPerson.toString().', () => {
            expect(firstPerson.toString()).to.not.be.equal(secondPerson.toString());
        });
    });
});
