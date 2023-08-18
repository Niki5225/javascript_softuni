function distinctArray(array){
    let uniqueElements = new Set(array);

    let result = [];
    for (let element of uniqueElements){
        result.push(element);
    }
    console.log(result.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])