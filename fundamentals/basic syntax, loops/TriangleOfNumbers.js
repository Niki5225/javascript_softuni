function trinagleOfNums(number){
    for (let i = 1; i <= number; i++){
        let str = ''
        for (let j = 1; j <= i; j++){
            str += `${i} `
        }
        console.log(str)
    }
}
trinagleOfNums(10)