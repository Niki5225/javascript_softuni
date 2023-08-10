function triangleOfNums(number) {
    for (let i = 1; i <= number; i++){
        let strOfNums = ''
        for (let j = 0; j < i; j++){
            strOfNums += `${i} `;
        }
        console.log(strOfNums);
    }
}

triangleOfNums(4);