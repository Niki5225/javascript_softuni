function working_time(arr){
    let hour = Number(arr[0]);
    let day = arr[1];

    if (day === "Sunday"){
        console.log("closed")
    } else{
        if (hour >= 10 && hour <= 18){
            console.log("open")
        } else{
            console.log("closed")
        }
    }
}
working_time((["19",
"Friday"]))
