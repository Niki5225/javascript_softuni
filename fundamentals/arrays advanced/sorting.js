function sorting(input){
    let array = input.sort((a, b) => b - a);
    let result = [];

    while (array.length !== 0){
        result.push(array.shift());
        result.push(array.pop());
    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94])