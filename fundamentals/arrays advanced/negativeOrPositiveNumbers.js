function negativeOrPositiveNumbers(array){
    let result = [];

    for (let element of array){
        let number = Number(element);
        if (element >= 0){
            result.push(number);
        } else result.unshift(number);
    }

    console.log(result.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])