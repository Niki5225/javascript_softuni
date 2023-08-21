function addressBook(input) {
    let assocArr = {};

    for (let element of input) {
        let [key, value] = element.split(':');
        assocArr[key] = value;
    }

    let sortedArr = Object.entries(assocArr).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (let [key, value] of sortedArr){
        console.log(`${key} -> ${value}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])