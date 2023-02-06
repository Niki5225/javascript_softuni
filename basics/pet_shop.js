function pet_shop(food){
    let dogsFood = Number(food[0])
    let catsFood = Number(food[1])
    console.log(`${(dogsFood * 2.5) + (catsFood * 4 )} lv.`)
}
pet_shop(["5 ", "4 "])