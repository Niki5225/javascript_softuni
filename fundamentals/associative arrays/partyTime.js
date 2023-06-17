function partyTime(input){
    let guests = new Map();

    for (let element of input){
        if (element === 'PARTY'){
            break;
        }
        if (guests.has(element)){
            guests.delete(element);
        } else {
            guests.set(element, null);
        }
    }

    let entries = Array.from(guests);
    console.log(entries.length);
    for (let [key, value] of entries){
        console.log(key);
    }
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);