function projectsCreation(input){
    let name = input[0];
    let projects = Number(input[1]);
    let neededHours = projects * 3
    console.log(`The architect ${name} will need ${neededHours} hours to complete ${projects} project/s.`)
}

projectsCreation(["George ", "4 "])