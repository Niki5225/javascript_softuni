function film(arr) {
    let budget = Number(arr[0]);
    let statists = Number(arr[1]);
    let price_per_dress = Number(arr[2]);

    let decor = budget * 0.1
    if (statists >= 150) {
        price_per_dress -= price_per_dress * 0.1
    }

    let needed_money = decor + (price_per_dress * statists)
    let left_money = Math.abs(budget - needed_money)

    if (budget >= needed_money) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${left_money.toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${left_money.toFixed(2)} leva more.`)

    }
}

film((["15437.62",
"186",
"57.99"])

)