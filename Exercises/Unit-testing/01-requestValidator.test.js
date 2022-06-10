const expect = require('chai').expect;
const validator = require('./01-requestValidator');

describe('Testing HTTP Request Validator', () => {
    let validInput = {
        method: 'GET',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    };

    describe('Working test', () => {
        it('Should return same object unchanged', () => {
            expect(validator(validInput)).to.equal(validInput);
        });
        it('Should have property method', () => {
            expect(validator(validInput)).to.have.property('method');
        });
        it('Should have property uri', () => {
            expect(validator(validInput)).to.have.property('uri');
        });
        it('Should have property version', () => {
            expect(validator(validInput)).to.have.property('version');
        });
        it('Should have property message', () => {
            expect(validator(validInput)).to.have.property('message');
        });
    });

    describe('Check if throw right message if missing/wrong property passed', () => {
        it('Should throw error with message "Invalid request header: Invalid Method" if missing/wrong methodproperty', () => {
            let wrongMethodProp = () => validator({ method: 'SET', uri: 'git.master', version: 'HTTP/1.1', message: '-recursive' });
            let missingMethodProp = () => validator({ uri: 'git.master', version: 'HTTP/1.1', message: '-recursive' });
            expect(wrongMethodProp).to.throw('Invalid request header: Invalid Method');
            expect(missingMethodProp).to.throw('Invalid request header: Invalid Method');
        });

        it('Should throw error with message "Invalid request header: Invalid URI" if missing/wrong uri property', () => {
            let wrongUriProp = () => validator({ method: 'GET', uri: 'git.m aster', version: 'HTTP/1.1', message: '-recursive' });
            let missingUriProp = () => validator({ method: 'GET', version: 'HTTP/1.1', message: '-recursive' });
            expect(wrongUriProp).to.throw('Invalid request header: Invalid URI');
            expect(missingUriProp).to.throw('Invalid request header: Invalid URI');
        });

        it('Should throw error with message "Invalid request header: Invalid Version" if missing/wrong version property', () => {
            let wrongVersionProp = () => validator({ method: 'GET', uri: 'git.master', version: 'HTT1P/1.1', message: '-recursive' });
            let missingVersionProp = () => validator({ method: 'GET', uri: 'git.master', message: '-recursive' });
            expect(wrongVersionProp).to.throw('Invalid request header: Invalid Version');
            expect(missingVersionProp).to.throw('Invalid request header: Invalid Version');
        });

        it('Should throw error with message "Invalid request header: Invalid Message" if missing/wrong message property', () => {
            let wrongMessageProp = () => validator({ method: 'GET', uri: 'git.master', version: 'HTTP/1.1', message: '\\' });
            let missingMessageProp = () => validator({ method: 'GET', uri: 'git.master', version: 'HTTP/1.1' });
            expect(wrongMessageProp).to.throw('Invalid request header: Invalid Message');
            expect(missingMessageProp).to.throw('Invalid request header: Invalid Message');
        });
    });

    describe('Check if throw right error if more than one prop missing', () => {
        it('Should throw error for first missing/wrong property', () => {
            let wrongUriAndMessageProp = () => validator({ method: 'GET', uri: 'git.mas ter', version: 'HTTP/1.1', message: '\\' });
            expect(wrongUriAndMessageProp).to.throw('Invalid request header: Invalid URI');
        });
    });
});