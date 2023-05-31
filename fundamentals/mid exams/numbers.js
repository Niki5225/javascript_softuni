function numbers(input){
    let array = input.split(' ').map(Number);
    let totalSum = 0;
    let arrayOfTopNums = [];

    for (let i = 0; i < array.length; i++){
        totalSum += array[i];
    }

    let averageValue = totalSum / array.length;

    for (let j = 0; j < array.length; j++){
        if (array[j] > averageValue){
            arrayOfTopNums.push(array[j]);
        }
    }
    arrayOfTopNums = arrayOfTopNums.sort((a, b) => a - b);

    newArr = [];

    for (let k = arrayOfTopNums.length - 1; k >= 0; k--){
        newArr.push(arrayOfTopNums[k]);
    }

    newArr.splice(5);
    if (newArr.length > 0){
        console.log(newArr.join(' '));
    } else {
        console.log('No');
    }
}

numbers('1');