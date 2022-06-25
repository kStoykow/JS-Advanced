const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};


const { expect } = require('chai');

describe('CarService tests:', () => {
  describe('isItExpensive', () => {
    it('If issue is "Engine" or "Transmission" returns message (The issue with the car is more severe and it will cost more money)', () => {
      expect(carService.isItExpensive('Engine')).to.equals('The issue with the car is more severe and it will cost more money');
      expect(carService.isItExpensive('Transmission')).to.equals('The issue with the car is more severe and it will cost more money');
    });
    it('If issue is anything other returns message (The overall price will be a bit cheaper)', () => {
      expect(carService.isItExpensive('1')).to.equal('The overall price will be a bit cheaper');
      expect(carService.isItExpensive('string')).to.equal('The overall price will be a bit cheaper');
    });
  });

  describe('discount', () => {
    it('Validates the input. Throws error if not number', () => {
      expect(() => carService.discount(0, '')).to.Throw(Error, 'Invalid input');
      expect(() => carService.discount(0, {})).to.Throw(Error, 'Invalid input');
      expect(() => carService.discount([], 0)).to.Throw(Error, 'Invalid input');
      expect(() => carService.discount(undefined, 0)).to.Throw(Error, 'Invalid input');
    });

    it('Returns "You cannot apply a discount" if parts are less or equal to 2', () => {
      expect(carService.discount(2, 400)).to.equal('You cannot apply a discount');
      expect(carService.discount(0, 400)).to.equal('You cannot apply a discount');
    });

    it('returns price saved, discount is different, 15% if  2 < num of parts <= 7, 30% if number of parts are more than 7', () => {
      expect(carService.discount(3, 20)).to.equal(`Discount applied! You saved 3$`);
      expect(carService.discount(3, 400)).to.equal(`Discount applied! You saved 60$`);
      expect(carService.discount(3, 0)).to.equal(`Discount applied! You saved 0$`);

      expect(carService.discount(7, 1)).to.equal(`Discount applied! You saved 0.15$`);
      expect(carService.discount(7, 10)).to.equal(`Discount applied! You saved 1.5$`);
      expect(carService.discount(7, 0)).to.equal(`Discount applied! You saved 0$`);
      expect(carService.discount(10, 10)).to.equal(`Discount applied! You saved 3$`);
    });
  });

  describe('partsToBuy', () => {
    it('Verify params. Throw error if invalid.', () => {
      expect(() => carService.partsToBuy([], '')).to.Throw(Error, 'Invalid input');
      expect(() => carService.partsToBuy([], 0)).to.Throw(Error, 'Invalid input');
      expect(() => carService.partsToBuy(undefined, [])).to.Throw(Error, 'Invalid input');
      expect(() => carService.partsToBuy({}, [])).to.Throw(Error, 'Invalid input');
    });

    it('If parts catalog is empty returns 0', () => {
      expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equals(0);
    });

    it('Calculates total price for needed parts and returns it', () => {
      expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], [])).to.equal(0);
      expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["coil springs"])).to.equal(230);
      expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["coil springs", 'blowoff valve'])).to.equal(375);
      expect(carService.partsToBuy([{ part: "string", price: 1 }, { part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["string"])).to.equal(1);
    })
  });
});