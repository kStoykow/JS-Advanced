() => {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function (command) {
        let result;
        function error(ingredient) {
            return result = `Error: not enough ${ingredient} in stock`;
        }

        function cook(protein, carb, fat, flavour, quantity) {
            let [pNeeded, carbNeeded, fatNeeded, flavourNeeded] = [0, 0, 0, 0];

            if (protein > 0) {
                if (protein * quantity > stock.protein) {
                    return error('protein');
                }
                pNeeded = quantity * protein;
            }

            if (carb > 0) {
                if (carb * quantity > stock.carbohydrate) {
                    return error('carbohydrate');
                }
                carbNeeded = quantity * carb;
            }

            if (fat > 0) {
                if (fat * quantity > stock.fat) {
                    return error('fat');
                }
                fatNeeded = quantity * fat;
            }

            if (flavour > 0) {
                if (flavour * quantity > stock.flavour) {
                    return error('flavour');
                }
                flavourNeeded = quantity * flavour;
            }

            stock.protein -= pNeeded;
            stock.carbohydrate -= carbNeeded;
            stock.fat -= fatNeeded;
            stock.flavour -= flavourNeeded;
            result = 'Success';
            return;
        }

        let recepies = {
            apple: (q) => cook(0, 1, 0, 2, q),
            lemonade: (q) => cook(0, 10, 0, 20, q),
            burger: (q) => cook(0, 5, 7, 3, q),
            eggs: (q) => cook(5, 0, 1, 1, q),
            turkey: (q) => cook(10, 10, 10, 10, q),
        }

        let [cmd, meal, quantity] = command.split(' ');

        if (cmd == 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }

        if (cmd == 'restock') {
            stock[meal] += Number(quantity);
            return 'Success';
        }

        recepies[meal](quantity);
        return result;
    }
}