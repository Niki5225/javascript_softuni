function foodDelivery(arr){
    let chickenMealPrice = Number(arr[0]) * 10.35
    let fishMeal = Number(arr[1]) * 12.4
    let veganMeal = Number(arr[2]) * 8.15
    let totalPrice = chickenMealPrice + fishMeal + veganMeal + 2.5 + ((chickenMealPrice + fishMeal + veganMeal) * 0.2)
    console.log(totalPrice)
}
foodDelivery(["2 ",
"4 ",
"3 "]
)