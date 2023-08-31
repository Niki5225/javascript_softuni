function evenPositionElements(input){
    let evenPositionArr = [];
    for (let i = 0; i < input.length; i++){
        if (i % 2 === 0){
            evenPositionArr.push(input[i]);
        }
    }
    console.log(evenPositionArr.join(' '));
}

evenPositionElements(['20', '30', '40',
    '50', '60']
);