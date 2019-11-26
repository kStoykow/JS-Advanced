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
            result = `Error: not enough ${ingredient} in stock`;
        }

        function cook(protein, carb, fat, flavour, q) {
            let [pr, c, ft, fl] = [0, 0, 0, 0];
            if (protein > 0) {
                if (protein * q > stock.protein) return error('protein')
                pr = q * protein
            }
            if (carb > 0) {
                if (carb * q > stock.carbohydrate) return error('carbohydrate')
                c = q * carb
            }
            if (fat > 0) {
                if (fat * q > stock.fat) return error('fat')
                ft = q * fat
            }
            if (flavour > 0) {
                if (flavour * q > stock.flavour) return error('flavour')
                fl = q * flavour
            }
            stock.protein -= pr
            stock.carbohydrate -= c
            stock.fat -= ft
            stock.flavour -= fl
            result = 'Success'
        }

        let recepies = {
            apple: (q) => cook(0, 1, 0, 2, q),
            lemonade: (q) => cook(0, 10, 0, 20, q),
            burger: (q) => cook(0, 5, 7, 3, q),
            eggs: (q) => cook(5, 0, 1, 1, q),
            turkey: (q) => cook(10, 10, 10, 10, q),
        }

        let cmdArr = command.split(' ');

        if (cmdArr.length == 1) {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        } else {
            let cmd = cmdArr[0]
            let quantity = cmdArr[2];

            switch (cmd) {
                case 'restock':
                    let e = cmdArr[1]
                    stock[e] += Number(quantity);
                    return 'Success'
                case 'prepare':
                    let meal = cmdArr[1];
                    recepies[meal](quantity);
                    return result;
            }
        }
    }
}

//manager("prepare lemonade 4");