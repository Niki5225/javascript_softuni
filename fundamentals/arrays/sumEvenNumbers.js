function sumEvenNumbers(array){
    let sum = 0;

    for (let el of array){
        let number = parseInt(el);
        if (number % 2 === 0){
            sum += number;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);