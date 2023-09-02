function magicMatrices(matrix){
    let sum = 0;
    let firstRow = matrix[0];
    for (let el of firstRow){
        sum += el;
    }

    for (let row = 0; row < matrix.length; row++){
        let sumRows = 0;
        let sumCols = 0

        for (let el of matrix[row]){
            sumRows += el;
        }
        for (let col = 0; col < matrix.length; col++){
            sumCols += matrix[row][col];
        }
        if (sumCols !== sum || sumRows !== sum){
            return false;
        }
    }
    return true;
}

console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));