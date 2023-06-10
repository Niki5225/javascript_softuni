function adressBook(array){
    let dict = {};

    for (let element of array){
        let [key, value] = element.split(':');
        dict[key] = value;
    }

    let entries = Object.entries(dict);

    let sortedAssocArr = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sortedAssocArr){
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

adressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);