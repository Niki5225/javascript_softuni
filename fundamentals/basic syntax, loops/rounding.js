function rounding(number, precision) {
    if (precision > 15){
        precision = 15;
    }
    let fixedNum = number.toFixed(precision);

    console.log(parseFloat(fixedNum));

}

rounding(
    3.1415926535897932384626433832795, 16
)