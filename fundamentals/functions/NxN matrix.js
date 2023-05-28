function printMatrix(number){
    let matrix = [];

    for (let i = 0; i < number; i++){
        let lst = [];
        for (let j = 0; j < number; j++){
            lst.push(number);
        }
        matrix.push(lst);
    }

    for (let k = 0; k < matrix.length; k++){
        console.log(matrix[k].join(' '));
    }

}
printMatrix(7);