function heartDelivery(input){

    function getFailedHousesCount(){
        let housesFailed = 0;

        for (let house of neighborhood){
            if (house !== 0){
                housesFailed++;
            }
        }
        return housesFailed;
    }

    function validateIfMissionIsSuccessful(){
        for (let house of neighborhood){
            if (house !== 0){
                return false;
            }
        }
        return true;
    }

    function validateIndex(index){
        if (index >= neighborhood.length){
            index = 0;
        }
        return index;
    }

    function jump(length){
        index += length;
        index = validateIndex(index);

        if (neighborhood[index] === 0){
            console.log(`Place ${index} already had Valentine's day.`);
            return;
        } else {
            neighborhood[index] -= 2;
        }

        if (neighborhood[index] <= 0){
            neighborhood[index] = 0;
            console.log(`Place ${index} has Valentine's day.`);
        }
    }

    function love(){
        console.log(`Cupid's last position was ${index}.`);
        let successful = validateIfMissionIsSuccessful();

        if (successful){
            console.log("Mission was successful.");
        } else {
            let housesFailed = getFailedHousesCount();
            console.log(`Cupid has failed ${housesFailed} places.`);
        }
    }

    let neighborhood = input.shift().split('@');
    let index = 0;

    for (let i = 0; i < input.length; i++){
        let info = input[i].split(' ');
        let command = info[0];
        switch (command){
            case 'Jump': jump(Number(info[1])); break;
            case 'Love!': love(); return;
        }
    }
}

heartDelivery((["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
);