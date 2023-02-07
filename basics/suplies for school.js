function supliesForSchool(input){
    let packagesPens = Number(input[0])
    let packagesMarkers = Number(input[1])
    let cleaner = Number(input[2])
    let discount = Number(input[3]) / 100
    let price = (packagesMarkers * 7.2) + (packagesPens * 5.8) + (cleaner * 1.2)
    let totalPrice = price - (price * discount)
    console.log(totalPrice)
}
supliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)