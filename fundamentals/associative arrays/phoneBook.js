function phoneBook(input){
    let assocArr = {};
    for (let element of input){
        let [name, phone] = element.split(' ');
        assocArr[name] = phone;
    }
    for (let key in assocArr){
        console.log(`${key} -> ${assocArr[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);