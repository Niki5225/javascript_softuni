function sumOfDigits(number){
    let strNumber = String(number);
    let result = 0;
    for (let i = 0; i < strNumber.length; i++){
        let a = strNumber[i];
        result += Number(a);
    }
    console.log(result)
}
sumOfDigits(444)