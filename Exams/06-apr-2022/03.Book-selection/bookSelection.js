const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};


const expect = require('chai').expect;

describe('bookSelection tests:', () => {
  describe('isGenreSuitable ', () => {
    it('Check if the book is suitable for kids. If not returns "Books with {genre} genre are not suitable for kids at {age} age"', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equals('Books with Thriller genre are not suitable for kids at 12 age');
      expect(bookSelection.isGenreSuitable('Horror', 12)).to.equals('Books with Horror genre are not suitable for kids at 12 age');
    });
    it('If age is more than 12 or genre is not Horror or Thriller returns "Those books are suitable"', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equals('Those books are suitable');
      expect(bookSelection.isGenreSuitable('string', 12)).to.equals('Those books are suitable');
    });
  });

  describe('isItAffordable ', () => {
    it('First param must be number. Throws error if not.', () => {
      expect(() => bookSelection.isItAffordable('', 1)).to.throw(Error, 'Invalid input');
      expect(() => bookSelection.isItAffordable([], 1)).to.throw(Error, 'Invalid input');
      expect(() => bookSelection.isItAffordable({}, 1)).to.throw(Error, 'Invalid input');
      expect(() => bookSelection.isItAffordable(undefined, 1)).to.throw(Error, 'Invalid input');
    });
    it('Second param must be number. Throws error if not.', () => {
      expect(() => bookSelection.isItAffordable(1, '')).to.throw(Error, 'Invalid input');
      expect(() => bookSelection.isItAffordable(1, [])).to.throw(Error, 'Invalid input');
      expect(() => bookSelection.isItAffordable(1, {})).to.throw(Error, 'Invalid input');
      expect(() => bookSelection.isItAffordable(1, undefined)).to.throw(Error, 'Invalid input');
    });
    it(`Calcs if u have enough money to buy the book. Returns "You don't have enough money" if not.`, () => {
      expect(bookSelection.isItAffordable(1, 0)).to.equals("You don't have enough money");
    });
    it(`If you have enough money returns "Book bought. You have {money}$ left"`, () => {
      expect(bookSelection.isItAffordable(1, 1)).to.equals(`Book bought. You have 0$ left`);
      expect(bookSelection.isItAffordable(1, 2)).to.equals(`Book bought. You have 1$ left`);
    });
  });

  describe('suitableTitles ', () => {
    it('First param must be array. Throws Error if not.', () => {
      expect(() => bookSelection.suitableTitles('', '')).to.Throw(Error, 'Invalid input');
      expect(() => bookSelection.suitableTitles(1, '')).to.Throw(Error, 'Invalid input');
      expect(() => bookSelection.suitableTitles({}, '')).to.Throw(Error, 'Invalid input');
      expect(() => bookSelection.suitableTitles(undefined, '')).to.Throw(Error, 'Invalid input');
    });
    it('Second param must be string. Throws Error if not.', () => {
      expect(() => bookSelection.suitableTitles([], [])).to.Throw(Error, 'Invalid input');
      expect(() => bookSelection.suitableTitles([], 1)).to.Throw(Error, 'Invalid input');
      expect(() => bookSelection.suitableTitles([], {})).to.Throw(Error, 'Invalid input');
      expect(() => bookSelection.suitableTitles([], undefined)).to.Throw(Error, 'Invalid input');
    });
    it('Add the new book to the array and returns the result array.', () => {
      expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller').toString()).to.equals('The Da Vinci Code');
      expect(bookSelection.suitableTitles([{ title: "string", genre: "Thriller" }, { title: "str", genre: "Thriller" }], 'Thriller').toString())
        .to.equals('string,str');
    });
  });
});