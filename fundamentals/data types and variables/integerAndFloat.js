function makeDifferenciation(number1, number2, number3){
    let sum = number1 + number2 + number3;
    let type = "";
    
    if (Number.isInteger(sum)){
        type = "Integer";
    } else {
        type = "Float";
    } 
    console.log(`${sum} - ${type}`)
}
makeDifferenciation(1, 22, 33.3)