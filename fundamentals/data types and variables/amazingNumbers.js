function amazingNumbers(num) {
    let strOfNum = String(num);
    let sum = 0;

    for (let i = 0; i < strOfNum.length; i++){
        sum += Number(strOfNum[i]);
    }

    if (sum.toString().includes('9')){
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(9);