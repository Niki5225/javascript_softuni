function rotateArr(arr, numOfRotations){
    for (let i = 0; i <= numOfRotations - 1; i++){
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(" "));
}
rotateArr([32, 21, 61, 1], 4);