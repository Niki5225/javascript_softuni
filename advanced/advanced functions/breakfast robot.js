function breakfastRobot(el) {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }


    function restock(element, quantity) {
        ingredients[element] += quantity;
        return 'Success';
    }

    function validateIfEnoughIngredients(p, c, fats, flavours, quantity) {
        if (p * quantity > ingredients["protein"]) {
            return 'Error: not enough protein in stock';
        } else if (c * quantity > ingredients["carbohydrate"]) {
            return 'Error: not enough carbohydrate in stock';
        } else if (fats * quantity > ingredients["fat"]) {
            return 'Error: not enough fat in stock';
        } else if (flavours * quantity > ingredients["flavour"]) {
            return 'Error: not enough fat in stock';
        }
        return true;
    }

    function makeRecipe(p, c, fats, flavours, quantity) {
        const result = validateIfEnoughIngredients(p, c, fats, flavours, quantity)
        if (result === true) {
            ingredients["protein"] -= p * quantity;
            ingredients["carbohydrate"] -= c * quantity;
            ingredients["fat"] -= fats * quantity;
            ingredients["flavour"] -= flavours * quantity;
            return 'Success';
        } else {
            return result;
        }
    }

    function prepare(recipe, quantity) {
        let result = undefined;

        if (recipe === 'apple') {
            result = makeRecipe(0, 1, 0, 2, quantity);
        } else if (recipe === 'burger') {
            result = makeRecipe(0, 5, 7, 3, quantity);
        } else if (recipe === 'lemonade') {
            result = makeRecipe(0, 10, 0, 20, quantity);
        } else if (recipe === 'eggs') {
            result = makeRecipe(5, 0, 1, 1, quantity);
        } else if (recipe === 'turkey') {
            result = makeRecipe(10, 10, 10, 10, quantity);
        }
        return result;
    }

    function report() {
        let result = [];
        for (const key in ingredients) {
            result.push(`${key}=${ingredients[key]}`);
        }
        return result.join(' ');
    }

    let commandElements = el.split(' ');

    if (commandElements[0] === 'restock') {
        return restock(commandElements[1], Number(commandElements[2]));
    } else if (commandElements[0] === 'prepare') {
        return prepare(commandElements[1], Number(commandElements[2]));
    } else {
        return report();
    }
}