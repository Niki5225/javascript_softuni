function heartDelivery(array) {
    let listOfEvenIntegers = array.shift().split('@').map(Number);
    let currentIndex = 0;

    while (true) {
        command = array.shift();
        if (command === 'Love!'){
            break;
        }

        let currentCommand = command.split(' ');
        let jumpRange = Number(currentCommand[1]);

        for (let i = 0; i < jumpRange; i++){
            currentIndex += 1;
        }

        if (currentIndex >= listOfEvenIntegers.length){
            currentIndex = 0;
        }
        
        if (listOfEvenIntegers[currentIndex] !== 0){
            listOfEvenIntegers[currentIndex] -= 2;
            if (listOfEvenIntegers[currentIndex] <= 0){
                listOfEvenIntegers[currentIndex] = 0;
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        }
    }
    console.log(`Cupid's last position was ${currentIndex}.`);
    let missedHouses = 0;
    for (let j = 0; j <= listOfEvenIntegers.length - 1; j++){
        if (listOfEvenIntegers[j] !== 0){
            missedHouses += 1;
        }
    }

    if (missedHouses > 0){
        console.log(`Cupid has failed ${missedHouses} places.`);
    } else{
        console.log(`Mission was successful.`);
    }
}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]
);