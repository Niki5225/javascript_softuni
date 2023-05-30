function distinctArray(array){
    let uniqueElementsOnly = new Set(array);

    let result = [];
    for (let element of uniqueElementsOnly){
        result.push(element);
    }

    console.log(result.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);