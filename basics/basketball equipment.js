function basketballEquipment(arr){
    let annualPrice = Number(arr[0])
    let sneakers = annualPrice - annualPrice * 0.4
    let equip = sneakers - sneakers * 0.2
    let ball = equip * 0.25
    let accessories = ball * 0.2
    let total = annualPrice + sneakers + equip + ball + accessories
    console.log(total)
}
basketballEquipment(["365 "])