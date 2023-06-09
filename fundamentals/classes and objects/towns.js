function towns(arr) {
    for (let town of arr) {
        let obj = {};
        let [currTown, latitude, longitude] = town.split(' | ');
        obj['town'] = currTown;
        obj['latitude'] = Number(latitude).toFixed(2);
        obj['longitude'] = Number(longitude).toFixed(2);
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);