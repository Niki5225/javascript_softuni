function reverseAnArrayOfNumbers(number, arr){
    let newArr = [];

    for (let i = 0; i < number; i++){
        newArr.push(arr[i]);
    }

    console.log(newArr.reverse().join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);