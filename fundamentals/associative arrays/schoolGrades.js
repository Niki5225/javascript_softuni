function schoolGrades(array){
    let dict = {};

    for (let element of array){
        let parts = element.split(' ');
        let name = parts.shift();
        
        let allGrades = 0
        let numberOfGrades = 0;

        for (let grade of parts){
            allGrades += Number(grade);
            numberOfGrades += 1
        }

        if (dict.hasOwnProperty(name)){
            dict[name][0] += allGrades;
            dict[name][1] += numberOfGrades; 
        } else {
            dict[name] = [allGrades, numberOfGrades];
        }

    }

    for (let [key, value] of Object.entries(dict)){
        averageGrade = (value[0] / value[1]).toFixed(2);
        dict[key] = averageGrade;
    }

    let entries = Object.entries(dict);

    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sorted){
        console.log(`${el[0]}: ${el[1]}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']

);