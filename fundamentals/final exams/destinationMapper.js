function destinationMapper(input){
    let pattern = /(?<separator>[=|\/])(?<place>[A-Z]{1}[A-Za-z]{2,})(\k<separator>)/gm;

    let matches = [...input.matchAll(pattern)];
    let resultPoints = 0;
    let destinations = [];

    for (let element of matches){
        resultPoints += element[2].length;
        destinations.push(element[2]);
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${resultPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")