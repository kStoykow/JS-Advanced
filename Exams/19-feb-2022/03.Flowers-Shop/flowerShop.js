const flowerShop = {
    calcPriceOfFlowers(flower, price, quantity) {
        if (typeof flower != 'string' || !Number.isInteger(price) || !Number.isInteger(quantity)) {
            throw new Error('Invalid input!');
        } else {
            let result = price * quantity;
            return `You need $${result.toFixed(2)} to buy ${flower}!`;
        }
    },
    checkFlowersAvailable(flower, gardenArr) {
        if (gardenArr.indexOf(flower) >= 0) {
            return `The ${flower} are available!`;
        } else {
            return `The ${flower} are sold! You need to purchase more!`;
        }
    },
    sellFlowers(gardenArr, space) {
        let shop = [];
        let i = 0;
        if (!Array.isArray(gardenArr) || !Number.isInteger(space) || space < 0 || space >= gardenArr.length) {
            throw new Error('Invalid input!');
        } else {
            while (gardenArr.length > i) {
                if (i != space) {
                    shop.push(gardenArr[i]);
                }
                i++
            }
        }
        return shop.join(' / ');
    }
}

const expect = require('chai').expect;
describe('Testing FlowerShop', () => {
    describe('calcPriceOfFlowers:', () => {
        it('Tests first param validity', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(1.1, 1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers([], 1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers({}, 1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 1, 1)).to.throw(Error, 'Invalid input!');
        });
        it('Tests second param validity', () => {
            expect(() => flowerShop.calcPriceOfFlowers('', '', 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', '1', 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', 1.1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', [], 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', {}, 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', undefined, 1)).to.throw(Error, 'Invalid input!');
        });
        it('Tests third param validity', () => {
            expect(() => flowerShop.calcPriceOfFlowers('', 1, '')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', 1, 1.1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', 1, '1')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', 1, [])).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', 1, {})).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('', 1, undefined)).to.throw(Error, 'Invalid input!');
        });
        it('Should return price * quantity and toFix it (2) ', () => {
            expect(flowerShop.calcPriceOfFlowers('tulip', 2, 2)).to.equals(`You need $4.00 to buy tulip!`);
            expect(flowerShop.calcPriceOfFlowers('tulip', 3, 5)).to.equals(`You need $15.00 to buy tulip!`);
        });
    });

    describe('checkFlowersAvailable:', () => {
        it('If shop has the flower return msg - "The {flower} are available!".', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equals('The Rose are available!');
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).to.equals('The Lily are available!');
        });
        it('If shop do not have the flower return msg - "The {flower} are sold! You need to purchase more!".', () => {
            expect(flowerShop.checkFlowersAvailable('Tulip', ["Rose", "Lily", "Orchid"])).to.equals('The Tulip are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('Palm', ["Rose", "Lily", "Orchid"])).to.equals('The Palm are sold! You need to purchase more!');
        });
    });

    describe('sellFlowers', () => {
        it('Test first param validity', () => {
            expect(() => flowerShop.sellFlowers('', 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers({}, 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(undefined, 1)).to.throw(Error, 'Invalid input!');
        });
        it('Test first param validity', () => {
            expect(() => flowerShop.sellFlowers([], '')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], [])).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], {})).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], undefined)).to.throw(Error, 'Invalid input!');
        });
        it('Should check if index is valid', () => {
            expect(() => flowerShop.sellFlowers(['Tulip', 'Rose', 'Orchid'], -1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['Tulip', 'Rose', 'Orchid'], 3)).to.throw(Error, 'Invalid input!');
        });

        it('Must remove flower at specified index.', () => {
            expect(flowerShop.sellFlowers(['Tulip', 'Rose', 'Orchid'], 1)).to.equals('Tulip / Orchid');
            expect(flowerShop.sellFlowers(['Tulip', 'Rose', 'Orchid'], 0)).to.equals('Rose / Orchid');
        });
    });
});