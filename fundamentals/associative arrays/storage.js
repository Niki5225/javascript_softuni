function storage(array){
    let dict = {};

    for (let element of array){
        let [item, quantity] = element.split(' ');
        if (dict.hasOwnProperty(item)){
            dict[item] += Number(quantity);
        } else {
            dict[item] = Number(quantity);
        }
    }

    for (let [key, value] of Object.entries(dict)){
        console.log(`${key} -> ${value}`);
    }
}

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);