class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(e => e.plantName == plantName);

        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (quantity == 1) {
            plant.ripe = true;
            plant.quantity += quantity;
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        if (quantity > 1) {
            plant.ripe = true;
            plant.quantity += quantity;
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(e => e.plantName == plantName);

        if (plant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants.splice(this.plants.indexOf(plant), 1);
        this.storage.push({ plantName, quantity: plant.quantity });

        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let r = `The garden has ${this.spaceAvailable} free space left.\n`
        r += `Plants in the garden: ${this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(e => e.plantName).join(', ')}\n`;
        r += this.storage.length == 0 ? `Plants in storage: The storage is empty.` : `Plants in storage: ${this.storage.map(e => `${e.plantName} (${e.quantity})`).join(', ')}`;

        return r;
    }
}