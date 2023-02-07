function calculatorDeposits(input) {
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let percentage_annual = Number(input[2]) / 100;
    let result = deposit + term * ((deposit * percentage_annual) / 12);
    console.log(result);
}

calculatorDeposits(["200 ",
    "3 ",
    "5.7 "]
)