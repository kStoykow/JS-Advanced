const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function (booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

const expect = require('chai').expect;

describe('Library tests:', () => {
    describe('calcPriceOfBook', () => {
        it('First param is string. Throw Error otherwise.', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.Throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook([], 1)).to.Throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook({}, 1)).to.Throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(undefined, 1)).to.Throw(Error, 'Invalid input');
        });
        it('Second param is integer number. Throw Error otherwise.', () => {
            expect(() => library.calcPriceOfBook('string', 1.1)).to.Throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('string', '1')).to.Throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('string', [])).to.Throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('string', {})).to.Throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('string', undefined)).to.Throw(Error, 'Invalid input');
        });

        it('Standart price of a book is 20 BGN', () => {
            expect(library.calcPriceOfBook('Name', 2020)).to.equals('Price of Name is 20.00');
        });
        it('If year of publication is less than or equal to 1980, there is 50% discount from price', () => {
            expect(library.calcPriceOfBook('Name', 1980)).to.equals('Price of Name is 10.00');
            expect(library.calcPriceOfBook('Name', 1000)).to.equals('Price of Name is 10.00');

        });
    });

    describe('findBook', () => {
        it('Throw Error if library is empty.', () => {
            expect(() => library.findBook([], 'name')).to.throw(Error, 'No books currently available');
        });
        it('If desired book is found returns "We found the book you want."', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equals('We found the book you want.');
        });
        it('If desired book is not found returns "The book you are looking for is not here!"', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'string')).to.equals('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {
        it('Throw error if count is not integer.', () => {
            expect(() => library.arrangeTheBooks(1.1)).to.throw(Error, 'Invalid input');
        });
        it('Throw error if count is negative number.', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error, 'Invalid input');
        });
        it('If there is enough space returns "Great job, the books are arranged."', () => {
            expect(library.arrangeTheBooks(0)).to.equals('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(1)).to.equals('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equals('Great job, the books are arranged.');
        });
        it('If not enough space returns "Insufficient space, more shelves need to be purchased."', () => {
            expect(library.arrangeTheBooks(41)).to.equals('Insufficient space, more shelves need to be purchased.');
        });
    });
});