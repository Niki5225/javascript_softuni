function dayOfTheWeek(arr){
    let nummedDay = Number(arr[0]);
    if (nummedDay === 1){
        console.log("Monday");
    } else if (nummedDay === 2){
        console.log("Tuesday")
    } else if (nummedDay === 3){
        console.log("Wednesday")
    } else if (nummedDay === 4){
        console.log("Thursday")
    } else if (nummedDay === 5){
        console.log("Friday")
    } else if (nummedDay === 6){
        console.log("Saturday")
    } else if (nummedDay === 7){
        console.log("Sunday")
    } else{
        console.log("Error")
    }
}
dayOfTheWeek((["5"]));