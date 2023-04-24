function tripleOfLatinLetters(number){
    let num = Number(number);
    for (let i = 0; i < num; i++){
        firstLetter = String.fromCharCode(97 + i);
        for (let j = 0; j < num; j++){
            secondLetter = String.fromCharCode(97 + j)
            for (let k = 0; k < num; k++){
                thirdLetter = String.fromCharCode(97 + k)
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`)       
            }
        }
    }
}
tripleOfLatinLetters('3')