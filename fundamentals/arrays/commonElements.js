function findCommonElements(arr1, arr2){
    let commonElements = [];

    for (let i = 0; i <= arr1.length - 1; i++){
        for (let j = 0; j <= arr2.length - 1; j++){
            if (arr1[i] === arr2[j]){
                commonElements.push(arr1[i]);
            }
        }
    }

    for (let i of commonElements){
        console.log(i);
    }
}
findCommonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);