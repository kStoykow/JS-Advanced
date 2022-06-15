const expect = require('chai').expect;
const StringBuilder = require('./13-StringBuilder');

describe('General StringBuilder class tests:', () => {
    describe('Testing creating an instance:', () => {
        it('Can be instantied wouthout params.', () => {
            let instance = new StringBuilder();
            expect(instance.toString()).to.equal('');
            expect(instance._stringArray.length).to.equal(0);
        });
        it('Can be instantied with undefined param.', () => {
            let instance = new StringBuilder(undefined);
            expect(instance.toString()).to.equal('');
            expect(instance._stringArray.length).to.equal(0);
        });
        it('Should be instance of StringBuilder class.', () => {
            let instance = new StringBuilder();
            expect(instance instanceof StringBuilder).to.be.true;
            expect(instance._stringArray.length).to.equal(0);
        });
        it('Can be instantied with string param.', () => {
            let instance = new StringBuilder('string');
            expect(Array.isArray(instance._stringArray)).to.be.true;
        });
        it('Holds characters (strings with length1) in array.', () => {
            let instance = new StringBuilder('string');
            expect(Array.isArray(instance._stringArray)).to.be.true;
            expect(instance._stringArray.every(e => e.length == 1)).to.be.true;
        });
        it('Holds characters (strings with length1) in array.', () => {
            let instance = new StringBuilder({ name: 'string' }.name);
            expect(Array.isArray(instance._stringArray)).to.be.true;
            expect(instance._stringArray.every(e => e.length == 1)).to.be.true;
            expect(instance._stringArray.join('')).to.equal('string');
        });
        it('Can be instantied with 1 string param.', () => {
            let instance = new StringBuilder('string');
            expect(instance._stringArray.join('')).to.equal('string');
        });
    });

    describe('Testing static _vrfyParam(param) method:', () => {
        it('Should throw TypeError if wrong param type.', () => {
            expect(function () { new StringBuilder(1) }).to.throw(TypeError, 'Argument must be a string');
            expect(function () { new StringBuilder(1.1) }).to.throw(TypeError, 'Argument must be a string');
            expect(function () { new StringBuilder({}) }).to.throw(TypeError, 'Argument must be a string');
            expect(function () { new StringBuilder([]) }).to.throw(TypeError, 'Argument must be a string');
            expect(function () { new StringBuilder(['1']) }).to.throw(TypeError, 'Argument must be a string');
            expect(function () { new StringBuilder([1]) }).to.throw(TypeError, 'Argument must be a string');
            expect(function () { new StringBuilder(function () { }) }).to.throw(TypeError, 'Argument must be a string');
            expect(function () { new StringBuilder(null) }).to.throw(TypeError, 'Argument must be a string');
            expect(function () { new StringBuilder(true) }).to.throw(TypeError, 'Argument must be a string');
        });
    });
});

describe('Testing instances of StringBuilder class:', () => {
    describe('Testing method append(param):', () => {
        it('Should convert the string param to array and append it to the end of the storage.', () => {
            let instance = new StringBuilder('string');
            instance.append('2');
            expect(Array.isArray(instance._stringArray)).to.be.true;
        });
        it('Expect "string" to become "string2".', () => {
            let instance = new StringBuilder('string');
            instance.append('2');
            expect(instance._stringArray.join('')).to.equal('string2');
            expect(instance._stringArray[instance._stringArray.length - 1]).to.equal('2');
        });
        it('Should throw if trying to pass invalid argument.', () => {
            let instance = new StringBuilder('string');
            expect(function () { instance.append(1) }).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Testing method prepend(param):', () => {
        it('Should convert the string param to array and prepend it in the beginning of the storage.', () => {
            let instance = new StringBuilder('string');
            instance.prepend('2');
            expect(Array.isArray(instance._stringArray)).to.be.true;
        });
        it('Expect "string" to become "2string".', () => {
            let instance = new StringBuilder('string');
            instance.prepend('2');
            expect(instance._stringArray.join('')).to.equal('2string');
            expect(instance._stringArray[0]).to.equal('2');
        });
        it('Should throw if trying to pass invalid argument.', () => {
            let instance = new StringBuilder('string');
            expect(function () { instance.prepend(undefined) }).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Testing method insertAt(string, index):', () => {
        it('Should convert the string param to array and insertAt it in the beginning of the storage.', () => {
            let instance = new StringBuilder('string');
            instance.insertAt('2', 1);
            expect(Array.isArray(instance._stringArray)).to.be.true;
            expect(instance._stringArray[1]).to.equal('2');
        });
        it('Expect "string" to become "s2tring".', () => {
            let instance = new StringBuilder('string');
            instance.insertAt('2', 1);
            expect(instance._stringArray.join('')).to.equal('s2tring');
        });
        it('Should throw if trying to pass invalid argument.', () => {
            let instance = new StringBuilder('string');
            expect(function () { instance.insertAt(1, null) }).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('Testing method remove(startIndex, length):', () => {
        it('Should convert the string param to array and remove {length} elements from {startIndex} from the storage.', () => {
            let instance = new StringBuilder('string');
            instance.remove(0, 1);
            expect(Array.isArray(instance._stringArray)).to.be.true;
        });
        it('Expect "string" to become "tring".', () => {
            let instance = new StringBuilder('string');
            instance.remove(0, 1);
            expect(instance._stringArray.join('')).to.equal('tring');
        });
        it('Expect "string" to become "strin".', () => {
            let instance = new StringBuilder('string');
            instance.remove(5, 1);
            expect(instance._stringArray.join('')).to.equal('strin');
        });
        it('Expect "string" to become "sg".', () => {
            let instance = new StringBuilder('string');
            instance.remove(1, 4);
            expect(instance._stringArray.join('')).to.equal('sg');
        });
        it('Expect "string" to become "".', () => {
            let instance = new StringBuilder('string');
            instance.remove(0, 10);
            expect(instance._stringArray.join('')).to.equal('');
        });
        it('Expect "string" to become "s".', () => {
            let instance = new StringBuilder('string');
            instance.remove(1, 10);
            expect(instance._stringArray.join('')).to.equal('s');
        });
    });

    describe('Testing method toString():', () => {
        it('Should return a string with all elements joined by an empty string.', () => {
            let instance = new StringBuilder('string');
            expect(typeof instance.toString()).to.equal('string');
            expect(instance.toString()).to.equal(instance._stringArray.join(''));
            expect(instance.toString()).to.equal('string');
        });
        it('Should return a string with all elements joined by an empty string.', () => {
            let instance = new StringBuilder('string');
            instance.append('23')
            expect(typeof instance.toString()).to.equal('string');
            expect(instance.toString()).to.equal(instance._stringArray.join(''));
            expect(instance.toString()).to.equal('string23');
        });
        it('Should return a string with all elements joined by an empty string.', () => {
            let instance = new StringBuilder('string');
            instance.prepend('1')
            expect(typeof instance.toString()).to.equal('string');
            expect(instance.toString()).to.equal(instance._stringArray.join(''));
            expect(instance.toString()).to.equal('1string');
        });
        it('Should return a string with all elements joined by an empty string.', () => {
            let instance = new StringBuilder('string');
            instance.remove(3, 2)
            expect(typeof instance.toString()).to.equal('string');
            expect(instance.toString()).to.equal(instance._stringArray.join(''));
            expect(instance.toString()).to.equal('strg');
        });
        it('Should return a string with all elements joined by an empty string.', () => {
            let instance = new StringBuilder('string');
            instance.insertAt('1', 3)
            expect(typeof instance.toString()).to.equal('string');
            expect(instance.toString()).to.equal(instance._stringArray.join(''));
            expect(instance.toString()).to.equal('str1ing');
        });
    });

    describe('Integration test:', () => {
        it('Tests whole functionality.', () => {
            let str = 'string';
            let instance = new StringBuilder();
            str.split('').forEach(e => { instance.append(e); instance.prepend(e); });
            instance.insertAt('test', 4);
            instance.remove(2, 4);
            expect(instance.toString()).to.equal('gnsttsstring');
        });
    });
});