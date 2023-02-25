function bonus_score(arr){
    let points = Number(arr[0]);
    let bonus = 0;
    if (points <= 100){
        bonus += 5;
    } else if (points < 1000){
        bonus += 0.2 * points;
    } else {
        bonus += 0.1 * points;
    }
    if (points % 2 === 0){
        bonus += 1;
    } else if (points % 5 === 0){
        bonus += 2;
    }
    console.log(bonus)
    console.log(bonus + points)
}
bonus_score((["2703"]));