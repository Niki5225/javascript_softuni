function heroicInventory(str){
    let result = [];

    for (let element of str){
        let info = element.split(' / ');
        let items = info[2] ? info[2].split(', ') : [];
        let obj = {
            'name': info[0],
            'level': parseInt(info[1]),
            'items': items
        };
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);