function equalNeighbours(input) {
    let pairs = 0;

    for (let row = 0; row < input.length; row++) {
        let innerArr = input[row];
        for (let col = 0; col < innerArr.length; col++) {
            if (col + 1 < innerArr.length && input[row][col] === input[row][col + 1]){
                pairs += 1;
            }
            if (row + 1 < input.length && input[row][col] === input[row + 1][col]){
                pairs += 1;
            }
        }
    }

    console.log(pairs);
}

equalNeighbours([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]);