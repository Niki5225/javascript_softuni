function biggestElement(matrix){
    let maxEl = -Infinity;

    for (let el1 of matrix){
        for (let el2 of el1){
            if (el2 > maxEl){
                maxEl = el2;
            }
        }
    }
    return maxEl;
}
biggestElement([[20, 50, 10], [8, 33, 145]])