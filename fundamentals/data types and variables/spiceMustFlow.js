function spice(yield){
    let totalSpice = 0;
    let days = 0
    while (yield >= 100){
        totalSpice += yield;
        days += 1;
        yield -= 10;
        totalSpice -= 26
    }
    if (totalSpice >= 26){
        totalSpice -= 26;
    } else{
        totalSpice = 0;
    }
    console.log(days);
    console.log(totalSpice);
}
spice(450);