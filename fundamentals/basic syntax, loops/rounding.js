function parse_nums(number, fixation){
    if (fixation > 15){
        fixation = 15
    }
    let result = number.toFixed(fixation)
    console.log(parseFloat(result))
}
parse_nums(10.5, 3)