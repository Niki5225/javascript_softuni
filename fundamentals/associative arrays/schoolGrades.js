function schoolGrades(input){
    let assocArr = {};
    for (let element of input){
        let info = element.split(' ');
        let name = info.shift();
        let grades = info.map(Number);
        if (assocArr.hasOwnProperty(name)){
            for (let grade of grades){
                assocArr[name].push(grade);
            }
        } else {
            assocArr[name] = grades;
        }
    }

    for (let key of Object.keys(assocArr)){
        let totalSum = 0;
        for (let grade of assocArr[key]){
            totalSum += grade;
        }
        assocArr[key] = (totalSum / assocArr[key].length).toFixed(2);
    }

    let sortedArr = Object.entries(assocArr).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sortedArr){
        console.log(`${key}: ${value}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);