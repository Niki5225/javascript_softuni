function squareOfStars(number){
    for (let i = 0; i < number; i++){
        let str = '';
        for (let j = 0; j < number; j++){
            str += ' *';
        }
        console.log(str.trim());
    }
}

squareOfStars(3)