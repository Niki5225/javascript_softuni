function filterEmployees(json, filterData){
    let info = JSON.parse(json);
    let [key, value] = filterData.split('-');
    let result = [];

    for (const element of info) {
        if (element[key] === value){
            result.push(element);
        }
    }

    for (let i = 0; i < result.length; i++){
        let currentEl = result[i];
        console.log(`${i}. ${currentEl['first_name']} ${currentEl['last_name']} - ${currentEl['email']}`);
    }
}

filterEmployees(`[{
 "id": "1",
 "first_name": "Ardine",
 "last_name": "Bassam",
 "email": "abassam0@cnn.com",
 "gender": "Female"
 }, {
 "id": "2",
 "first_name": "Kizzee",
 "last_name": "Jost",
 "email": "kjost1@forbes.com",
 "gender": "Female"
 },
{
 "id": "3",
 "first_name": "Evanne",
 "last_name": "Maldin",
 "email": "emaldin2@hostgator.com",
 "gender": "Male"
 }]`,
    'gender-Female');