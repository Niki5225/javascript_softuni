function sumSeconds(arr){
    let first = Number(arr[0]);
    let second = Number(arr[1]);
    let third = Number(arr[2]);
    let total = first + second + third;
    let minutes = Math.floor(total / 60);
    let seconds = total % 60;
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds((["35", "45", "44"]));