const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }
}

const expect = require('chai').expect;

describe('Testing companyAdministration:', () => {
    describe('hiringEmployee:', () => {
        it('Position must be aways Programer. Otherwise throw error.', () => {
            expect(() => companyAdministration.hiringEmployee('Name', 'string', 1)).to.throw(Error, `We are not looking for workers for this position.`);
        });
        it('Experience must be greater than or equal 3. Returns "{name} was successfully hired for the position {position}."', () => {
            expect(companyAdministration.hiringEmployee('Name', 'Programmer', 3)).to.equal('Name was successfully hired for the position Programmer.');
        });
        it('Experience must be greater than or equal 3. Otherwise returns "{name} is not approved for this position."', () => {
            expect(companyAdministration.hiringEmployee('Name', 'Programmer', 2)).to.equal('Name is not approved for this position.');
        });
    });

    describe('calculateSalary:', () => {
        it('Param must be type number', () => {
            expect(() => companyAdministration.calculateSalary('1')).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary([])).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary({})).to.throw(Error, 'Invalid hours');
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw(Error, 'Invalid hours');
        });
        it('Param must be positive number', () => {
            expect(() => companyAdministration.calculateSalary(-2)).to.throw(Error, 'Invalid hours');
        });
        it('All workers get paid equal per hour - 15 BGN.', () => {
            expect(companyAdministration.calculateSalary(1)).to.equals(15);
        });
        it('Calculates total salary by multiplying the hours by pay per hour.', () => {
            expect(companyAdministration.calculateSalary(0)).to.equals(0);
            expect(companyAdministration.calculateSalary(100)).to.equals(1500);
        });
        it('Should get bonus 1000 BGN if worked More than 160 hours', () => {
            expect(companyAdministration.calculateSalary(160)).to.equals(2400);
            expect(companyAdministration.calculateSalary(161)).to.equals(3415);
        });
    });

    describe('firedEmployee', () => {
        it('Check if first param is Array, Throw error if not.', () => {
            expect(() => companyAdministration.firedEmployee('', 0)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(1, 0)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee({}, 0)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(undefined, 0)).to.throw(Error, 'Invalid input');
        });
        it('Check if second param is number, Throw error if not.', () => {
            expect(() => companyAdministration.firedEmployee([], '1')).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee([], {})).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee([], [])).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee([], undefined)).to.throw(Error, 'Invalid input');
        });
        it('Check if second param is in range, Throw error if not.', () => {
            expect(() => companyAdministration.firedEmployee([], -1)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Name'], 1)).to.throw(Error, 'Invalid input');
        });
        it('Should remove employee from the array at given index and return result as string joined by ", "', () => {
            expect(companyAdministration.firedEmployee(['Name', 'Name2', 'Name3'], 1)).to.equals('Name, Name3');
        });
    });
});