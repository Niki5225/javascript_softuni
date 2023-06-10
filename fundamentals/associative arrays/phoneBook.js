function phoneBook(array){
    let dict = {};

    for (let element of array){
        let [key, value] = element.split(' ');
        dict[key] = value;
    }

    for (let [key, value] of Object.entries(dict)){
        console.log(`${key} -> ${value}`);
    }
}

phoneBook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
);