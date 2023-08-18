function searchForANumber (array, conditions){
    let elementsToTake = conditions[0];
    let deleteElements = conditions[1];
    let searchedNum = conditions[2];

    let arr = [];
    for (let i = 0; i < elementsToTake; i++){
        arr.push(array[i]);
    }
    arr.splice(0, deleteElements);

    let foundTimes = 0;
    for (let element of arr){
        if (element === searchedNum){
            foundTimes += 1;
        }
    }

    console.log(`Number ${searchedNum} occurs ${foundTimes} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)