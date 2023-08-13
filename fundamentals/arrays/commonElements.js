function commonElements(array1, array2){
    let commonElements = [];
    for (let el of array1){
        if (array2.includes(el)){
            commonElements.push(el);
        }
    }

    console.log(commonElements.join('\n'));
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);