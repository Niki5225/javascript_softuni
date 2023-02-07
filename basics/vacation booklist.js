function vacationBooklist(input){
    let pagesBook = Number(input[0])
    let pagesHour = Number(input[1])
    let days = Number(input[2])

    let timeForBook = pagesBook / pagesHour
    let neededHoursPerDay = timeForBook / days
    console.log(neededHoursPerDay)
}
vacationBooklist(["212 ",
"20 ",
"2 "]
)