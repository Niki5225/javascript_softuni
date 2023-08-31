function sumFirstAndLast(input){
    console.log(Number(input.shift()) + Number(input.pop()));
}

sumFirstAndLast(['20', '30', '40'] )