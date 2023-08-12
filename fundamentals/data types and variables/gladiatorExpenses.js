function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let totalPrice = 0;
    let timesShieldBroke = 0;

    for (let i = 1; i <= lostFights ; i++) {
        if (i % 2 === 0) {
            totalPrice += helmetPrice;
        }

        if (i % 3 === 0) {
            totalPrice += swordPrice;
        }

        if (i % 6 === 0) {
            totalPrice += shieldPrice;
            timesShieldBroke++;

        }

        if (timesShieldBroke % 2 === 0 && timesShieldBroke !== 0) {
            totalPrice += armourPrice;
            timesShieldBroke = 0;
        }

    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);