function area_of_figures(arr) {
    let figure = arr[0]
    if (figure === "square") {
        let side = Number(arr[1])
        console.log((side * side).toFixed(3))
    } else if (figure === "rectangle") {
        let len = Number(arr[1])
        let width = Number(arr[2])
        console.log((len * width).toFixed(3))
    } else if (figure === "circle") {
        let radius = Number(arr[1])
        console.log((radius * radius * Math.PI).toFixed(3))
    } else if (figure === "triangle") {
        let side = Number(arr[1])
        let height = Number(arr[2])
        console.log((side * height / 2).toFixed(3))
    }
}

area_of_figures((["triangle",
"4.5",
"20"])
)