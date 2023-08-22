function piccolo(input){

    function validateIfCarInParking(carNumber){
        return carNumbers.includes(carNumber);
    }

    let carNumbers = [];


    for (let element of input){
        let [command, carNumber] = element.split(', ');

        if (command === 'IN'){
            if (!validateIfCarInParking(carNumber)){
                carNumbers.push(carNumber);
            }
        } else if (command === 'OUT'){
            if (validateIfCarInParking(carNumber)){
                let index = carNumbers.indexOf(carNumber);
                carNumbers.splice(index, 1);
            }
        }
    }

    if (carNumbers){
        let sortedArr = carNumbers.sort();
        for (let num of sortedArr){
            console.log(num);
        }
    } else {
        console.log("Parking Lot is Empty");
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);