function houseParty(array) {
    let comingPeople = [];

    for (let i = 0; i < array.length; i++) {
        currentSentenceParts = array[i].split(' ');
        nameOfPerson = currentSentenceParts[0];

        if (currentSentenceParts.length === 3) {
            if (comingPeople.includes(nameOfPerson)){
                console.log(`${nameOfPerson} is already in the list!`);
            } else {
                comingPeople.push(nameOfPerson);
            }
        } else {
            if (comingPeople.includes(nameOfPerson)){
                comingPeople = comingPeople.filter(x => x != nameOfPerson);
            } else {
                console.log(`${nameOfPerson} is not in the list!`);
            }
        }
    }
    
    for (let element of comingPeople){
        console.log(element);
    }
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)