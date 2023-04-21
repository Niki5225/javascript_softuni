function numbers(number){
    let strNumber = number.toString()
    let sum = 0
    for (let i = 0; i < strNumber.length; i++){
        sum += Number(strNumber[i]);
    }
    let strSum = sum.toString()
    let result = undefined

    if (strSum.includes("9")){
        result = true
    } else {
        result = false
    }

    if (result){
        console.log(`${number} Amazing? True`)
    } else {
        console.log(`${number} Amazing? False`)
    }
}
numbers(363)