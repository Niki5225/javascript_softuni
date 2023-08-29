function sameNumbers(number){
    let strNumber = String(number);
    let total = 0;
    let value = true

    for (let el of strNumber){
        if(strNumber[0] !== el){
            value = false;
            break;
        }
    }

    for (let el of strNumber){
        total += Number(el);
    }
    console.log(value);
    console.log(total);
}
sameNumbers(1234)