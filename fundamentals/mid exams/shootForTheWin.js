function shootForTheWin(array) {
    function indexValidation(index){
        if (index <= arrayOfNums.length - 1 && index >= 0){
            return true;
        } else {
            return false;
        }
    }

    let arrayOfNums = array.shift().split(' ').map(Number);

    for (let i = 0; i <= array.length - 1; i++){
        currentIndex = array[i];
        if (!indexValidation(currentIndex)){
            continue;
        }


        if (currentIndex === 'End'){
            break;
        }

        currentNum = arrayOfNums[currentIndex];
        if (currentNum === -1){
            continue;
        }
        arrayOfNums[currentIndex] = -1;

        for (let j = 0; j <= arrayOfNums.length - 1; j++){
            if (arrayOfNums[j] !== -1){
                if (arrayOfNums[j] <= currentNum){
                    arrayOfNums[j] += currentNum;
                } else {
                    arrayOfNums[j] -= currentNum;
                }
            }
        }
    }
    
    counter = 0;
    for (let element of arrayOfNums){
        if (element === -1){
            counter += 1;
        }
    }

    console.log(`Shot targets: ${counter} -> ${arrayOfNums.join(' ')}`);
}

shootForTheWin((["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
)