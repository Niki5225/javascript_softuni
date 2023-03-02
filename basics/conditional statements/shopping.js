function shopping(arr){
    let budget = Number(arr[0])
    let videocards = Number(arr[1])
    let processors = Number(arr[2])
    let ram = Number(arr[3])

    let videocard_price = 250
    let processor_price = (videocard_price * videocards) * 0.35
    let ram_price = (videocard_price * videocards) * 0.1
    let total_price = (videocard_price * videocards) + (processor_price * processors) + (ram_price * ram)

    if (videocards > processors){
        total_price -= total_price * 0.15
    }
    if (total_price <= budget){
        console.log(`You have ${(budget - total_price).toFixed(2)} leva left!`)
    } else{
        console.log(`Not enough money! You need ${(total_price - budget).toFixed(2)} leva more!`)
    }
}
shopping(["920.45",
"3",
"1",
"1"])

