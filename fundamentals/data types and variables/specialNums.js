function specialNums(num){
    for (let i = 1; i <= num; i++){
        let currentNum = i.toString()
        let sum = 0;
        for (let j = 0; j < currentNum.length; j++){
            sum += Number(currentNum[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNums(20);