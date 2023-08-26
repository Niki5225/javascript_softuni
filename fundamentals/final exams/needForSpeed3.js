function needForSpeed3(input){
    function drive(car, distance, fuel){
        if (cars[car][1] >= fuel){
            cars[car][1] -= fuel;
            cars[car][0] += distance;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        } else {
            console.log("Not enough fuel to make that ride");
        }

        if (cars[car][0] >= 100000){
            delete cars[car];
            console.log(`Time to sell the ${car}!`);
        }
    }

    function revert(car, mileage){
        let initialMileage = cars[car][0];
        cars[car][0] -= mileage;
        if (cars[car][0] < 10000){
            cars[car][0] = 10000;
        } else {
            console.log(`${car} mileage decreased by ${Math.abs(cars[car][0] - initialMileage)} kilometers`);
        }
    }

    function refuel(car, fuel){
        let initialFuel = cars[car][1];

        cars[car][1] += fuel;
        if (cars[car][1] > 75){
            cars[car][1] = 75;
        }
        console.log(`${car} refueled with ${cars[car][1] - initialFuel} liters`);
    }

    function stop(){
        for (let [key, value] of Object.entries(cars)){
            console.log(`${key} -> Mileage: ${value[0]} kms, Fuel in the tank: ${value[1]} lt.`);
        }
    }

    let cars = {};
    let number = Number(input.shift());
    for (let i = 0; i < number; i++){
        let [model, mileage, fuel] = input[i].split("|");
        cars[model] = [Number(mileage), Number(fuel)];
    }

    let actions = input.slice(number);

    for (let el of actions){
        let action = el.split(' : ');
        let command = action.shift();

        switch (command){
            case 'Drive':
                let [car1, distance, fuel1] = action;
                drive(car1, Number(distance), Number(fuel1));
                break;
            case 'Refuel':
                let [car2, fuel2] = action;
                refuel(car2, Number(fuel2));
                break;
            case 'Revert':
                let [car3, fuel3] = action;
                revert(car3, Number(fuel3));
                break;
            case 'Stop':
                stop();
                break;
        }
    }
}

needForSpeed3([
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]
);