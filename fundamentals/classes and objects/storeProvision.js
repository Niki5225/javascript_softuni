function storeProvision(Bigarr, BigArr2) {

    let obj = {};

    for (let i = 0; i <= Bigarr.length - 1; i += 2) {
        let key = Bigarr[i];
        let value = Bigarr[i + 1];
        if (Object.keys(obj).includes(key)) {
            obj[key] += Number(value);
        } else {
            obj[key] = Number(value);
        }
    }

    for (let j = 0; j <= BigArr2.length - 1; j += 2) {
        let key = BigArr2[j];
        let value = BigArr2[j + 1];

        if (Object.keys(obj).includes(key)) {
            obj[key] += Number(value);
        } else {
            obj[key] = Number(value);
        }
    }

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);