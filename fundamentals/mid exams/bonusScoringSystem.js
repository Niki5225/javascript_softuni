function bonusScoringSystem(input){
    let maxBonus = 0;
    let students = parseInt(input.shift());
    let lectures = parseInt(input.shift());
    let additionalBonus = parseInt(input.shift());
    let lecturesMaxStudent = 0;

    for (let element of input){
        let studentAttendance = parseInt(element);
        let bonus = studentAttendance / lectures  * (5 + additionalBonus);
        if (bonus > maxBonus){
            maxBonus = bonus;
            lecturesMaxStudent = studentAttendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${lecturesMaxStudent} lectures.`);
}

bonusScoringSystem([
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
    ]
);