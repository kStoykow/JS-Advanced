const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}


const expect = require('chai').expect;

describe("Tests …", function () {
    describe('Testing searchCar method:', () => {
        describe('Testing searchCar method input params:', () => {
            it('First param must be array. Throws Error if not.', () => {
                expect(function () { rentCar.searchCar('string', '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar(1, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar({}, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar(NaN, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar(true, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar(undefined, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar(null, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar(function () { }, '') }).to.Throw(Error, "Invalid input!");
            });
            it('Second param must be string. Throws Error if not.', () => {
                expect(function () { rentCar.searchCar([], 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar([], {}) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar([], NaN) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar([], true) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar([], undefined) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar([], null) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.searchCar([], function () { }) }).to.Throw(Error, "Invalid input!");
            });
        });

        describe('If there are no matching elements func should throw Error:', () => {
            it('Must equal "There are no such models in the catalog!"', () => {
                expect(function () { rentCar.searchCar(['Audi'], 'BMW') }).to.Throw(Error, 'There are no such models in the catalog!');
            });
        });

        describe('If matches are found, func should return "There is ${findModel.length} car of model ${model} in the catalog!:', () => {
            it('Input params : (["Volkswagen", "BMW", "Audi"], "BMW")', () => {
                expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.equals('There is 1 car of model BMW in the catalog!');
            });
        });
    });

    describe('Testing calculatePriceOfCar method:', () => {
        describe('Testing calculatePriceOfCar method input params:', () => {
            it('First param must be string. Throws Error if not.', () => {
                expect(function () { rentCar.calculatePriceOfCar([], '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar(1, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar({}, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar(NaN, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar(true, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar(undefined, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar(null, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar(function () { }, '') }).to.Throw(Error, "Invalid input!");
            });
            it('Second param must be number. Throws Error if not.', () => {
                expect(function () { rentCar.calculatePriceOfCar([], '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar([], {}) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar([], NaN) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar([], true) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar([], undefined) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar([], null) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.calculatePriceOfCar([], function () { }) }).to.Throw(Error, "Invalid input!");
            });
        });

        describe('If there are no such model func should throw Error:', () => {
            it('Must equal "No such model in the catalog!"', () => {
                expect(function () { rentCar.calculatePriceOfCar('string', 1) }).to.Throw(Error, 'No such model in the catalog!');
            });
        });
        describe('If matches are found, func should return "You choose {model} and it will cost ${cost}!":', () => {
            it('Input params : (Audi, 1)', () => {
                expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equals(`You choose Audi and it will cost $36!`);
            });
        });
    });

    describe('Testing checkBudget method:', () => {
        describe('Testing checkBudget method input params:', () => {
            it('First param must be number. Throws Error if not.', () => {
                expect(function () { rentCar.checkBudget('', 1, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget([], 1, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget({}, 1, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(NaN, 1, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(true, 1, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(undefined, 1, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(null, 1, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(function () { }, 1, 1) }).to.Throw(Error, "Invalid input!");
            });
            it('Second param must be number. Throws Error if not.', () => {
                expect(function () { rentCar.checkBudget(1, '', 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, [], 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, {}, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, NaN, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, true, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, undefined, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, null, 1) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, function () { }, 1) }).to.Throw(Error, "Invalid input!");
            });
            it('Third param must be number. Throws Error if not.', () => {
                expect(function () { rentCar.checkBudget(1, 1, '') }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, 1, []) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, 1, {}) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, 1, NaN) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, 1, true) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, 1, undefined) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, 1, null) }).to.Throw(Error, "Invalid input!");
                expect(function () { rentCar.checkBudget(1, 1, function () { }) }).to.Throw(Error, "Invalid input!");
            });
        });

        describe('Testing bigger budget:', () => {
            it('If budget is bigger or equal to cost return "You rent a car!":', () => {
                expect(rentCar.checkBudget(10, 1, 30)).to.equals('You rent a car!');
                expect(rentCar.checkBudget(10, 1, 10)).to.equals('You rent a car!');
            });
            it('If budget is less than cost return "You need a bigger budget!":', () => {
                expect(rentCar.checkBudget(10, 1, 9)).to.equals('You need a bigger budget!');
            });
        });
    });

    describe('Integration test:', () => {
        it('', () => {
            let asd = function () {
                let bmw = rentCar.searchCar(['BMW', 'BMW', 'Audi'], 'BMW');

                if (bmw) {
                    let isEnoughForBmw = rentCar.calculatePriceOfCar('BMW', 4);

                    if (isEnoughForBmw == `You choose BMW and it will cost $180!`) {
                        return rentCar.checkBudget(45, 4, 180);
                    } else {
                        return 'You need a bigger budget!';
                    }

                } else {
                    throw new Error('There are no such models in the catalog!');
                }
            }
            expect(asd()).to.equals('You rent a car!');
        });
    });
});