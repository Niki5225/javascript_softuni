function storeCatalogue(array) {
    let catalogue = {};

    for (let element of array){
        let [product, price] = element.split(' : ');
        let numPrice = Number(price);
        if (!catalogue[product[0]]){
            catalogue[product[0]] = {};
        }
        catalogue[product[0]][product] = numPrice;
    }

    let sortedKeys = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    for (const arr of sortedKeys) {
        let valueObjSort = Object.entries(arr[1]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(arr[0]);
        for (let lst of valueObjSort){
            console.log(`  ${lst[0]}: ${lst[1]}`);
        }
    }
}
storeCatalogue(['Appricot : 20.4', 'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);