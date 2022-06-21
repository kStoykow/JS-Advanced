class CarDealership {
    constructor(name) {
        this.name = name;
        this.totalIncome = 0;
        this.availableCars = [];
        this.soldCars = [];
    }
    addCar(model, horsepower, price, mileage) {
        if (model == "" || horsepower < 0 || Number.isInteger(horsepower) == false || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar(model, desiredMileage) {
        if (this.availableCars.find(e => e.model == model) == undefined) {
            throw new Error(`${model} was not found!`);
        }
        let carForSale = this.availableCars.find(e => e.model == model);
        let price = 0;
        if (carForSale.mileage <= desiredMileage) {
            price = carForSale.price;
        } else if (Math.abs(desiredMileage - carForSale.mileage) <= 40000) {
            price = carForSale.price * 0.95;
        } else {
            price = carForSale.price * 0.9;
        }
        this.availableCars.splice(this.availableCars.indexOf(carForSale), 1);
        this.soldCars.push({ model, 'horsepower': carForSale.horsepower, soldPrice: price.toFixed(2) });
        this.totalIncome += Number(price.toFixed(2));
        return `${model} was sold for ${price.toFixed(2)}$`;
    }
    currentCar() {
        return this.availableCars.length == 0 ? 'There are no available cars' : `-Available cars:\n${this.availableCars.map(obj => `---${obj.model} - ${obj.horsepower} HP - ${obj.mileage.toFixed(2)} km - ${obj.price.toFixed(2)}$`).join('\n')}`;
    }
    salesReport(criteria) {
        const sortMap = {
            'horsepower': (arr) => arr.sort((a, b) => b.horsepower - a.horsepower),
            'model': (arr) => arr.sort((a, b) => a.model.localeCompare(b.model)),
        }
        if (typeof sortMap[criteria] !== 'function') {
            throw new Error('Invalid criteria!');
        }

        let sorted = sortMap[criteria](this.soldCars);
        
        return (`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n` +
            `-${this.soldCars.length} cars sold:\n` +
            `${sorted.map(e => (`---${e.model} - ${e.horsepower} HP - ${e.soldPrice}$`)).join('\n')}`);
    }
}