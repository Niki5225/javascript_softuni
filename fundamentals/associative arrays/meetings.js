function meetings(input){
    let assocArr = {};

    for (let element of input){
        let [day, person] = element.split(' ');
        if (assocArr.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            assocArr[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [key, value] of Object.entries(assocArr)){
        console.log(`${key} -> ${value}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);