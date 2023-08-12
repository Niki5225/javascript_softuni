function spiceMustFlow(expectedYieldDaily) {
    let totalAmountOfYield = 0;
    let days = 0;

    while (expectedYieldDaily >= 100){
        days += 1;
        totalAmountOfYield += expectedYieldDaily;
        expectedYieldDaily -= 10;
        totalAmountOfYield -= 26;
    }

    if (totalAmountOfYield >= 26){
        totalAmountOfYield -= 26;
    } else {
        totalAmountOfYield = 0;
    }
    console.log(days);
    console.log(totalAmountOfYield);
}

spiceMustFlow(450);