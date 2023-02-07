function fishTank(arr){
    let len = Number(arr[0])
    let width = Number(arr[1])
    let height = Number(arr[2])
    let percentage = Number(arr[3]) / 100
    let volume = len * width * height
    let inLiters = volume * 0.001
    let result = inLiters - (inLiters * percentage)
    console.log(result)

}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
)