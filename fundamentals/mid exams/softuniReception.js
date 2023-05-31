function reception(array){
    let [employeeEfficency1,employeeEfficency2, employeeEfficency3, studentsCount] = array;
    let totalEfficiency = Number(employeeEfficency1) + Number(employeeEfficency2) + Number(employeeEfficency3);

    let totalHoursNeeded = 0;

    while (studentsCount > 0){
        studentsCount -= totalEfficiency;
        totalHoursNeeded += 1;
        if (totalHoursNeeded % 4 === 0){
            totalHoursNeeded += 1;
        }
    }
    console.log(`Time needed: ${totalHoursNeeded}h.`);
}
reception(['1','2','3','45']);