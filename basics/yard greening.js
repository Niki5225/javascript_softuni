function yardGreening(i){
    let squares = Number(i[0])
    let price = 7.61 * squares
    let discount = price * 0.18
    let totalPrice = price - discount
    console.log(`The final price is: ${totalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["150"])