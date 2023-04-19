function vacation(number, typePeople, day){
    let totalPrice = 0
    if (day === "Friday"){
        if (typePeople === "Students"){
            totalPrice = number * 8.45
            if (number >= 30){
                totalPrice -= totalPrice * 0.15
            }
        } else if (typePeople === "Business"){
            if (number >= 100){
                number -= 10
            }
            totalPrice = number * 10.90
        } else {
            totalPrice = number * 15
            if (number >= 10 && number <= 20){
                totalPrice -= totalPrice * 0.05
            }
        }
    } else if (day === "Saturday"){
        if (typePeople === "Students"){
            totalPrice = number * 9.80
            if (number >= 30){
                totalPrice -= totalPrice * 0.15
            }
        } else if (typePeople === "Business"){
            if (number >= 100){
                number -= 10
            }
            totalPrice = number * 15.60
        } else {
            totalPrice = number * 20
            if (number >= 10 && number <= 20){
                totalPrice -= totalPrice * 0.05
            }
        }
    } else if (day === "Sunday"){
        if (typePeople === "Students"){
            totalPrice = number * 10.46
            if (number >= 30){
                totalPrice -= totalPrice * 0.15
            }
        } else if (typePeople === "Business"){
            if (number >= 100){
                number -= 10
            }
            totalPrice = number * 16
        } else {
            totalPrice = number * 22.50
            if (number >= 10 && number <= 20){
                totalPrice -= totalPrice * 0.05
            }   
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"
    )