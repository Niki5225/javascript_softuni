function time(arr){
    let minutes = Number(arr[0]) * 60 + Number(arr[1]);
    let totalTime = minutes + 15;
    let hours = Math.floor(totalTime / 60);
    let leftMinutes = totalTime % 60;
    if (hours >= 24){
        hours -= 24
    }
    if (leftMinutes < 10){
        console.log(`${hours}:0${leftMinutes}`)
    } else{
        console.log(`${hours}:${leftMinutes}`)
    }
}
time(["23", "59"])
