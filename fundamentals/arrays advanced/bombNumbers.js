function bombNumbers(sequence, bomb) {
    let specialNumber = bomb[0];
    let bombPower = bomb[1];

    while (sequence.includes(specialNumber)) {
        let index = sequence.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToRemove);
    }
    let sum = 0;
    for (let el of sequence){
        sum += el;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2,
        2, 9],
    [4, 2])