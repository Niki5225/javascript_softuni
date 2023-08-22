function companyUsers(input){
    let companies = {};

    for (let element of input){
        let [companyName, idEmployee] = element.split(' -> ');
        if (companies.hasOwnProperty(companyName)){
            if (!companies[companyName].includes(idEmployee)){
                companies[companyName].push(idEmployee);
            }
        } else {
            companies[companyName] = [];
            companies[companyName].push(idEmployee);
        }
    }

    let sortedArr = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sortedArr){
        console.log(key);
        for (let v of value){
            console.log(`-- ${v}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345','SoftUni -> BB12345','Microsoft -> CC12345','HP -> BB12345']);