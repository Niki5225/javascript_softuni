function repainting(arr){
    let nailon_price = (Number(arr[0]) + 2) * 1.5
    let paint_price = (Number(arr[1]) * 1.1) * 14.5
    let paint2 = Number(arr[2]) * 5
    let total_cost = nailon_price + paint_price + paint2 + 0.4
    let work_cost = (total_cost * 0.3) * Number(arr[3])
    console.log(total_cost + work_cost)
}
repainting(["10 ",
"11 ",
"4 ",
"8 "]
)