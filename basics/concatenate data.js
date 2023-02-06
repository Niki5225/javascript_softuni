function concatenateData(input){
    let first_name = input[0]
    let age = Number(input[2])
    let second_name = input[1]
    let town = input[3]
    console.log(`You are ${first_name} ${second_name}, a ${age}-years old person from ${town}.`)
}
concatenateData(['Maria', 'Ivanova', 20, 'Sofia'])