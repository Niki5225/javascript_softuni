function vacation(quantity, group, day){
    let totalPrice = 0;

    if (group === 'Students'){
        switch (day){
            case 'Friday': totalPrice = quantity * 8.45; break;
            case 'Saturday': totalPrice = quantity * 9.80; break;
            case 'Sunday': totalPrice = quantity * 10.46; break;
        }
        if (quantity >= 30){
            totalPrice -= totalPrice * 0.15;
        }

    } else if (group === 'Business'){
        if (quantity >= 100){
            quantity -= 10;
        }
        switch (day){
            case 'Friday': totalPrice = quantity * 10.90; break;
            case 'Saturday': totalPrice = quantity * 15.60; break;
            case 'Sunday': totalPrice = quantity * 16; break;
        }
    } else if (group === 'Regular'){
            switch (day){
                case 'Friday': totalPrice = quantity * 15; break;
                case 'Saturday': totalPrice = quantity * 20; break;
                case 'Sunday': totalPrice = quantity * 22.50; break;
            }
        if (quantity >= 10 && quantity <= 20){
            totalPrice -= totalPrice * 0.05;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday");