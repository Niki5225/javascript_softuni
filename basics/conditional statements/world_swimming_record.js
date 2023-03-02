function world_swimming_record(arr) {
    let record_in_seconds = Number(arr[0]);
    let distance_in_meters = Number(arr[1]);
    let time_per_meter = Number(arr[2]);

    let delation = Math.floor((distance_in_meters / 15)) * 12.5
    let total_time = distance_in_meters * time_per_meter + delation

    let left_time = Math.abs(total_time - record_in_seconds)
    if (total_time < record_in_seconds) {
        console.log(`Yes, he succeeded! The new world record is ${total_time.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${left_time.toFixed(2)} seconds slower.`)
    }


}

world_swimming_record((["55555.67",
"3017",
"5.03"]))

