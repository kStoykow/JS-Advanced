const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

const expect = require('chai').expect;

describe('Cinema tests:', () => {
    describe('showMovies', () => {
        it('Returns available movies.', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equals('King Kong, The Tomorrow War, Joker');
            expect(cinema.showMovies(['King Kong'])).to.equals('King Kong');
        });
        it('Returns "There are currently no movies to show." if no available movies.', () => {
            expect(cinema.showMovies([])).to.equals('There are currently no movies to show.');
        });
    });

    describe('ticketPrice', () => {
        it('Returns price if the type is present.', () => {
            expect(cinema.ticketPrice('Premiere')).to.equals(12.00);
            expect(cinema.ticketPrice('Normal')).to.equals(7.50);
            expect(cinema.ticketPrice('Discount')).to.equals(5.50);
        });
        it('Throws Error if the type is not present.', () => {
            expect(() => cinema.ticketPrice('string')).to.Throw(Error, 'Invalid projection type.');
        });
    });

    describe('swapSeatsInHall', () => {
        it('Both params must exist. Returns "Unsuccessful change of seats in the hall." if not.', () => {
            expect(cinema.swapSeatsInHall(1)).to.equals('Unsuccessful change of seats in the hall.');
        });
        it('Both params must be integer. Returns "Unsuccessful change of seats in the hall." if not.', () => {
            expect(cinema.swapSeatsInHall(1.1, 1)).to.equals('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1.1)).to.equals('Unsuccessful change of seats in the hall.');
        });
        it('Both params must be less than capacity of the hall(20). Returns "Unsuccessful change of seats in the hall." if not.', () => {
            expect(cinema.swapSeatsInHall(21, 1)).to.equals('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 21)).to.equals('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 21)).to.equals('Unsuccessful change of seats in the hall.');
        });
        it('Both params must be positive number. Returns "Unsuccessful change of seats in the hall." if not.', () => {
            expect(cinema.swapSeatsInHall(0, 1)).to.equals('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equals('Unsuccessful change of seats in the hall.');
        });
        it('Both seats must differ, cant change with yourself. Returns "Unsuccessful change of seats in the hall." if not.', () => {
            expect(cinema.swapSeatsInHall(1, 1)).to.equals('Unsuccessful change of seats in the hall.');
        });
        it('Returns "Successful change of seats in the hall." if both params valid.', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equals('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.equals('Successful change of seats in the hall.');
        });
    });
});