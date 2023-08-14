function oddAndEvenSum(number) {
    let numAsStr = String(number);
    let oddSum = 0;
    let evenSum = 0;

    for (let element of numAsStr) {
        let currentNum = Number(element);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);