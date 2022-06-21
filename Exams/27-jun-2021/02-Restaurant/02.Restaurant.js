class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let actions = [];
        products.forEach(x => {
            const [name, quantity, totalPrice] = x.split(' ');
            if (this.budgetMoney >= Number(totalPrice)) {
                if (this.stockProducts.hasOwnProperty(name) == false) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += Number(quantity);
                this.budgetMoney -= Number(totalPrice);
                this.history.push(`Successfully loaded ${quantity} ${name}`);
                actions.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
                actions.push(`There was not enough money to load ${quantity} ${name}`);
            }
        });

        return actions.join('\n');
    }

    addToMenu(meal, products, price) {
        if (this.menu.hasOwnProperty(meal) == false) {

            this.menu[meal] = { products, price: Number(price) };

            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;

        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length > 0) {
            return `${Object.entries(this.menu).map(([meal, vals]) => `${meal} - $ ${vals.price}`).join('\n')}`;
        }
        return 'Our menu is not ready yet, please come later...';
    }

    makeTheOrder(meal) {
        const currMeal = this.menu[meal];

        if (currMeal == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let isOrder = currMeal.products.map(e => e.split(' ')).every(([p, q]) => this.stockProducts[p] > Number(q));

        if (isOrder) {
            currMeal.products.map(e => e.split(' ')).forEach(([p, q]) => this.stockProducts[p] -= Number(q));
            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

        } else {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
    }
}