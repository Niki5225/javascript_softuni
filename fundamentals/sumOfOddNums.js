function solve(number){
    let counter = 0
    let finalSum = 0
    for (let i = 0; counter < number; i++){
        if (i % 2 != 0){
            counter += 1
            console.log(i)
            finalSum += i
        }
    }
    console.log(`Sum: ${finalSum}`)
}
solve(3)