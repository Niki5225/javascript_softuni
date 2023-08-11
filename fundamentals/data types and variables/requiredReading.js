function requiredReading(numOfPages, numOfPagesPerHour, days){
    let totalTime = numOfPages / numOfPagesPerHour;
    let requiredHoursPerDay = totalTime / days;

    console.log(requiredHoursPerDay)
}

requiredReading(212, 20, 2);