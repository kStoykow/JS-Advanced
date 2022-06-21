class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let unique = new Set();
        for (const e of vegetables) {
            let [type, quantity, price] = e.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            unique.add(type);

            let currProduct = this.availableProducts.find(e => e.type == type);
            if (currProduct !== undefined) {
                currProduct.quantity += quantity;
                if (currProduct.price < price) {
                    currProduct.price = price;
                }

            } else {
                this.availableProducts.push({ type, quantity, price })
            }
        }

        return `Successfully added ${[...unique].join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (const e of selectedProducts) {
            let [type, quantity] = e.split(' ');
            quantity = Number(quantity);

            let currProduct = this.availableProducts.find(e => e.type == type);

            if (currProduct == undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (currProduct.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += (currProduct.price * quantity);
            currProduct.quantity -= quantity;

        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let currProduct = this.availableProducts.find(e => e.type == type);

        if (currProduct == undefined) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (currProduct.quantity < quantity) {
            currProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;

        } else {
            currProduct.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        let r = ['Available vegetables:'];
        r.push(this.availableProducts.sort((a, b) => a.price - b.price).map(e => `${e.type}-${e.quantity}-$${e.price}`).join('\n'));
        r.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return r.join('\n');
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.buyingVegetables(["Okra 1"]));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));