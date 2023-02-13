function bigger_num(arr) {
    let num1 = Number(arr[0])
    let num2 = Number(arr[1])
    if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

bigger_num((["5", "3"]))