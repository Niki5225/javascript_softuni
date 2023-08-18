function houseParty(array) {
    let lstOfGuests = [];

    for (let element of array) {
        let arrElement = element.split(' ');
        if (arrElement.length === 3) {
            if (lstOfGuests.includes(arrElement[0])) {
                console.log(`${arrElement[0]} is already in the list!`);
            } else {
                lstOfGuests.push(arrElement[0]);
            }

        } else {
            if (lstOfGuests.includes(arrElement[0])) {
                indexOfGuest = lstOfGuests.indexOf(arrElement[0]);
                lstOfGuests.splice(indexOfGuest, 1);
            } else {
                console.log(`${arrElement[0]} is not in the list!`);
            }
        }
    }
    for (let el of lstOfGuests) {
        console.log(el);
    }
}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])