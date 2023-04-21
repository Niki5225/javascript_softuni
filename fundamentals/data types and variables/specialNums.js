function nums(num){
    for (let i = 1; i <= num; i++){
        let number = i.toString()
        let result = 0
        for (let j = 0; j < number.length; j++){
            result += Number(number[j])
        }
        if (result === 5 || result === 7 || result === 11){
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
    }
}
nums(15)