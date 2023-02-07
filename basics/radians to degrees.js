function radiansToDegrees(input){
    let radians = Number(input[0]);
    let result = radians * 180 / Math.PI
    console.log(result)
}
radiansToDegrees((["3.1416"]))