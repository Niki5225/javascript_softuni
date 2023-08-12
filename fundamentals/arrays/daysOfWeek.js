function daysOfWeek(dayOfWeek){
    let daysOfWeekArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (dayOfWeek <= 7){
        console.log(daysOfWeekArr[dayOfWeek - 1]);
    } else {
        console.log('Invalid day!');
    }
}

daysOfWeek(6)