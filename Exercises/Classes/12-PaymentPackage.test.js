const expect = require('chai').expect;
const PaymentPackage = require('./12-PaymentPackage');

describe('General Class PaymentPackage testing:', () => {
    describe('Working tests:', () => {
        let workingPack = new PaymentPackage('HR', 1500);
        it(' it must be object.', () => {
            expect(typeof workingPack).to.equal('object');
        });
        it('Should be instance of PaymentPackage class', () => {
            expect(workingPack instanceof PaymentPackage).to.be.true;
        });
    });

    describe('Class can be instantiated with two params:', () => {
        it('Should throw error if no params passed.', () => {
            expect(function () { new PaymentPackage() }).to.Throw(Error);
        });
        it('Should throw error if less params passed.', () => {
            expect(function () { new PaymentPackage('aa') }).to.Throw(Error);
        });
    });

    describe('Params check:', () => {
        it('First param is non-empty string, should throw error if not.', () => {
            expect(function () { new PaymentPackage('', 1) }).to.Throw(Error);
        });
        it('First param is non-empty string, should throw error if not.', () => {
            expect(function () { new PaymentPackage(1, 1) }).to.Throw(Error);
        });
        it('Second param is non-negative number, should throw error if not.', () => {
            expect(function () { new PaymentPackage('aa', -1) }).to.Throw(Error);
        });
        it('Second param is non-negative number, should throw error if not.', () => {
            expect(function () { new PaymentPackage('aa', '1') }).to.Throw(Error);
        });
    });
});

describe('Testing instances:', () => {
    describe('Instance params:', () => {
        it('"string", 1', () => {
            expect('"string", 1').to.equal('"string", 1');
        });
    });

    describe('It should have accessor name with getter and setter:', () => {
        it('Expects ${instance}.name to be getter (string): equals "string".', () => {
            let instance = new PaymentPackage('string', 1);
            expect(instance.name).to.equal('string');
        });
        it('Expects ${instance}.name to be setter (string): equals "new string" after the change.', () => {
            let instance = new PaymentPackage('string', 1);
            instance.name = 'new string';
            expect(instance.name).to.equal('new string');
        });
        it('Invalid name should throw Error. Must be non-empty string.', () => {
            let instance = new PaymentPackage('string', 1);
            expect(function () { instance.name = 1; }).to.Throw(Error);
            expect(function () { instance.name = true; }).to.Throw(Error);
            expect(function () { instance.name = undefined; }).to.Throw(Error);
            expect(function () { instance.name = null; }).to.Throw(Error);
            expect(function () { instance.name = ''; }).to.Throw(Error);
            expect(function () { instance.name = []; }).to.Throw(Error);
            expect(function () { instance.name = {}; }).to.Throw(Error);
            expect(function () { instance.name = function () { }; }).to.Throw(Error);
            instance.name = 'string2';
            expect(typeof instance.name).to.equal('string');
        });
    });

    describe('It should have accessor value with getter and setter:', () => {
        it('Expects ${instance}.value to be getter (number): equals 1.', () => {
            let instance = new PaymentPackage('string', 1);
            expect(instance.value).to.equal(1);
        });
        it('Expects ${instance}.value to be setter (number): equals 2 after the change.', () => {
            let instance = new PaymentPackage('string', 1);
            instance.value = 2;
            expect(instance.value).to.equal(2);
        });
        it('Invalid value should throw Error. Must be non-negative number.', () => {
            let instance = new PaymentPackage('string', 1);
            expect(function () { instance.value = ''; }).to.Throw(Error);
            expect(function () { instance.active = '1'; }).to.Throw(Error);
            expect(function () { instance.value = -1; }).to.Throw(Error);
            expect(function () { instance.value = true; }).to.Throw(Error);
            expect(function () { instance.value = undefined; }).to.Throw(Error);
            expect(function () { instance.value = null; }).to.Throw(Error);
            expect(function () { instance.value = []; }).to.Throw(Error);
            expect(function () { instance.value = [1]; }).to.Throw(Error);
            expect(function () { instance.value = {}; }).to.Throw(Error);
            expect(function () { instance.value = function () { }; }).to.Throw(Error);
            instance.value = 0;
            expect(typeof instance.value).to.equal('number');
        });
    });

    describe('It should have accessor VAT with getter and setter:', () => {
        it('Expects ${instance}.VAT to be getter (number): equals 20(default value).', () => {
            let instance = new PaymentPackage('string', 1);
            expect(instance.VAT).to.equal(20);
        });
        it('Expects ${instance}.VAT to be setter (number): equals 1 after the change.', () => {
            let instance = new PaymentPackage('string', 1);
            instance.VAT = 1;
            expect(instance.VAT).to.equal(1);
        });
        it('Invalid VAT should throw Error. Cannot be string.', () => {
            let instance = new PaymentPackage('string', 1);
            expect(function () { instance.VAT = ''; }).to.Throw(Error);
            expect(function () { instance.active = '1'; }).to.Throw(Error);
            expect(function () { instance.VAT = -1; }).to.Throw(Error);
            expect(function () { instance.VAT = true; }).to.Throw(Error);
            expect(function () { instance.VAT = undefined; }).to.Throw(Error);
            expect(function () { instance.VAT = null; }).to.Throw(Error);
            expect(function () { instance.VAT = []; }).to.Throw(Error);
            expect(function () { instance.VAT = [1]; }).to.Throw(Error);
            expect(function () { instance.VAT = {}; }).to.Throw(Error);
            expect(function () { instance.VAT = function () { }; }).to.Throw(Error);
            instance.VAT = 2;
            expect(typeof instance.VAT).to.equal('number');
        });
    });

    describe('It should have accessor active with getter and setter:', () => {
        it('Expects ${instance}.active to be getter (Boolean): equals true(default value).', () => {
            let instance = new PaymentPackage('string', 1);
            expect(instance.active).to.equal(true);
        });
        it('Expects ${instance}.active to be setter (Boolean): equals false after the change.', () => {
            let instance = new PaymentPackage('string', 1);
            instance.active = false;
            expect(instance.active).to.be.false;
        });
        it('Invalid active should throw Error. Must be Boolean.', () => {
            let instance = new PaymentPackage('string', 1);
            expect(function () { instance.active = ''; }).to.Throw(Error);
            expect(function () { instance.active = '1'; }).to.Throw(Error);
            expect(function () { instance.active = -1; }).to.Throw(Error);;
            expect(function () { instance.active = undefined; }).to.Throw(Error);
            expect(function () { instance.active = null; }).to.Throw(Error);
            expect(function () { instance.active = []; }).to.Throw(Error);
            expect(function () { instance.active = {}; }).to.Throw(Error);
            expect(function () { instance.active = function () { }; }).to.Throw(Error);
            instance.active = true;
            expect(typeof instance.active).to.equal('boolean');
        });
    });

    describe('It should have method toString():', () => {
        describe('Expects ${instance}.toString() to return string representing the instance.', () => {
            it('If package is not active append label "(inactive)" to printed name.', () => {
                let instance = new PaymentPackage('string', 1);
                instance.active = false;
                expect(instance.toString()).to.equal([
                    `Package: ${instance.name}` + ' (inactive)',
                    `- Value (excl. VAT): ${instance.value}`,
                    `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`
                ].join('\n'));
            });

            it("If package is active Don't append label '(inactive)' to printed name.", () => {
                let instance = new PaymentPackage('string', 1);
                expect(instance.toString()).to.equal([
                    `Package: ${instance.name}` + '',
                    `- Value (excl. VAT): ${instance.value}`,
                    `- Value (VAT ${instance.VAT}%): ${instance.value * (1 + instance.VAT / 100)}`
                ].join('\n')
                );
            });
        });
    });
});