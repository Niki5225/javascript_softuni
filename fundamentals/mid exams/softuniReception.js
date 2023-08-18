function softuniReception(array) {
    let intArr = array.map(Number)
    let [employeeEfficiency1, employeeEfficiency2, employeeEfficiency3, students] = intArr;
    let hours = 0;
    let counter = 0

    while (students > 0){
        if (counter === 3){
            hours++;
            counter = 0;
            continue;
        }
        students -= employeeEfficiency1 + employeeEfficiency2 + employeeEfficiency3;
        hours++;
        counter++;
    }
    console.log(`Time needed: ${hours}h.`);
}
softuniReception(['3','2','5','40']);