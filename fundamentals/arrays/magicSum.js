function magicSum(array, magicSumGiven){
    let pairs = [];

    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] + array[j] === magicSumGiven){
                pairs.push([array[i], array[j]]);
            }
        }
    }

    for (let arr of pairs){
        console.log(arr.join(' '));
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);