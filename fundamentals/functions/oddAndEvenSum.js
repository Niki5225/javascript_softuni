function OddAndEvenSum(num){
    let strNum = String(num);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < strNum.length; i++){
        let currentNum = Number(strNum[i]);
        if (currentNum % 2 === 0){
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

OddAndEvenSum(1000435);