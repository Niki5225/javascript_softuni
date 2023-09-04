function lowestPricesInCities(array) {
    const obj = {};

    for (let element of array) {
        const [town, product, price] = element.split(' | ');
        if (!obj[product]) {
            obj[product] = {};
        }
        obj[product][town] = Number(price);
    }

    for (let [product, towns] of Object.entries(obj)) {
        const sorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        const [town, price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);
    }
}

lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
);
