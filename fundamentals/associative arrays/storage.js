function storage(input){
    let items = new Map();

    for (let element of input){
        let [product, quantity] = element.split(' ');
        if (items.has(product)){
            items.set(product, items.get(product) + Number(quantity));
        } else {
            items.set(product, Number(quantity));
        }
    }

    for (let [key, value] of items.entries()){
        console.log(`${key} -> ${value}`);
    }
}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
)