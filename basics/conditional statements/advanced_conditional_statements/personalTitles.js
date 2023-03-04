function personalTitles(arr){
    let years = Number(arr[0]);
    let gender = arr[1];
    if (gender === "m"){
        if (years >= 16){
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else {
        if (years >= 16){
            console.log("Ms.")
        } else{
            console.log("Miss")
        }
    }
}
personalTitles((["12",
"f"])
)