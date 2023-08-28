function sumOfNumbersNToM(num1, num2){
    let n = Number(num1);
    let m = Number(num2);
    let total = 0;

    for (let i = n; i <= m; i++){
        total += i;
    }
    console.log(total);
}

sumOfNumbersNToM('-8', '20' );