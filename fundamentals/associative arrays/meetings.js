function meetings(array){
    let dict = {};

    for (let element of array){
        let [key, value] = element.split(' ');
        if (dict.hasOwnProperty(key)){
            console.log(`Conflict on ${key}!`)
        } else {
            dict[key] = value;
            console.log(`Scheduled for ${key}`);
        }
    }

    for (let [key, value] of Object.entries(dict)){
        console.log(`${key} -> ${value}`);
    }

}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);