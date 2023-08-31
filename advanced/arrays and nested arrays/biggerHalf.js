function biggerHalf(input){
    let sorted = input.sort((a, b) => a - b);
    let half = Math.ceil((sorted.length - 1) / 2);
    let result = [];

    for (let i = half; i < sorted.length; i++){
        result.push(sorted[i]);
    }
    console.log(result);
}

biggerHalf([4, 7, 2, 5]  )