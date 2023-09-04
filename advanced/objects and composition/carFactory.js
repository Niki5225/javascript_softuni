function carFactory(obj){
    let newObj = {
        'model': obj['model'],
        'engine': {},
        'carriage': {},
        'wheels': []
    }
    function chooseEngine(){
        let requiredPower = obj['power'];
        if (requiredPower <= 90){
            newObj["engine"]['power'] = 90;
            newObj["engine"]['volume'] = 1800;
        } else if (requiredPower <= 120){
            newObj["engine"]['power'] = 120;
            newObj["engine"]['volume'] = 2400;
        } else if (requiredPower <= 200){
            newObj["engine"]['power'] = 200;
            newObj["engine"]['volume'] = 3500;
        }
    }

    function chooseCarriage(){
        let requiredCarriage = obj['carriage'];
        if (requiredCarriage === 'hatchback'){
            newObj['carriage']['type'] = 'hatchback';
        } else {
            newObj['carriage']['type'] = 'coupe';
        }
        newObj['carriage']['color'] = obj['color'];
    }

    function chooseWheels(){
        let num = Math.floor(obj['wheelsize']);
        if (num % 2 === 0){
            num -= 1;
        }

        for (let i = 0; i < 4; i++){
            newObj['wheels'].push(num);
        }
    }

    chooseEngine();
    chooseCarriage();
    chooseWheels();
    return newObj;
}

carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 });