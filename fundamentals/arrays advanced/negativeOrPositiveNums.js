function negativeOrPositiveNums(arr) {
    let negativeNums = [];
    let positiveNums = [];

    for (let element of arr) {
        if (Number(element) >= 0) {
            positiveNums.push(element);
        } else {
            negativeNums.unshift(element);
        }
    }

    for (let num of negativeNums){
        console.log(num);
    }

    for (let num2 of positiveNums){
        console.log(num2);
    }
}
negativeOrPositiveNums(['3', '-2', '0', '-1']);