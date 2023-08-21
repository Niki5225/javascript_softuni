function wordOccurrences(input){
    let assocArr = {};

    for (let element of input){
        if (assocArr.hasOwnProperty(element)){
            assocArr[element] += 1;
        } else {
            assocArr[element] = 1;
        }
    }

    let sortedArr = Object.entries(assocArr).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedArr){
        console.log(`${key} -> ${value} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])