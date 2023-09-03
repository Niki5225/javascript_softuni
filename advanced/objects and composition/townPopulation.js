function townPopulation(array) {
    let assocArr = new Map();

    for (let info of array) {
        let [town, strPopulation] = info.split(' <-> ');
        let population = Number(strPopulation);
        if (!assocArr.has(town)) {
            assocArr.set(town, 0)
        }
        assocArr.set(town, assocArr.get(town) + population);
    }

    for (let [key, value] of assocArr) {
        console.log(`${key} : ${value}`);
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);

