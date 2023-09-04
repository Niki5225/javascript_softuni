function townsToJSON(array) {
    let towns = [];
    array.shift();

    for (let element of array) {
        const [space, val1, val2, val3] = element.split('|');
        let numVal2 = Number(val2.trim()).toFixed(2);
        let numVal3 = Number(val3.trim()).toFixed(2);
        const object = {
            'Town': val1.trim(),
            'Latitude': Number(numVal2),
            'Longitude': Number(numVal3),
        }
        towns.push(object);
    }
    return JSON.stringify(towns);
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);