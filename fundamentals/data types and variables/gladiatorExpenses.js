function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalPrice = 0;
    counter = 0
    for (let i = 1; i < lostFights + 1; i++){
        if (i % 6 === 0){
            totalPrice += swordPrice + helmetPrice + shieldPrice;
            counter += 1;
            
        } else if (i % 2 === 0){
            totalPrice += helmetPrice;
        } else if (i % 3 === 0){
            totalPrice += swordPrice;
        }
        if (counter === 2){
            totalPrice += armorPrice;
            counter = 0;
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)
