function toyShop(arr) {
    let puzzle_price = 2.6;
    let talking_doll_price = 3;
    let teddy_price = 4.1;
    let minion_price = 8.2;
    let truck_price = 2;

    let excursion_price = Number(arr[0]);
    let puzzle_quantity = Number(arr[1]);
    let talking_doll_quantity = Number(arr[2]);
    let teddy_quantity = Number(arr[3]);
    let minion_quantity = Number(arr[4]);
    let truck_quantity = Number(arr[5]);

    let total_price = (puzzle_price * puzzle_quantity) + (talking_doll_price * talking_doll_quantity)
        + (teddy_price * teddy_quantity) + (minion_price * minion_quantity) + (truck_price * truck_quantity)
    let total_quantity = puzzle_quantity + talking_doll_quantity + teddy_quantity + minion_quantity + truck_quantity
    if (total_quantity >= 50){
        total_price -= total_price * 0.25
    }
    total_price -= total_price * 0.1
    let left_money = Math.abs(total_price - excursion_price)
    if (total_price >= excursion_price){
        console.log(`Yes! ${left_money.toFixed(2)} lv left.`)
    } else{
        console.log(`Not enough money! ${left_money.toFixed(2)} lv needed.`)
    }

}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
