function train(input){
    let array = input.shift().split(' ').map(x => Number(x));
    let capacity = Number(input.shift());

    for (let element of input){
        let command = element.split(' ');
        if (command.length === 1){
            let passengers = Number(command[0]);
            for (let i = 0; i < array.length; i++){
                if (array[i] + passengers <= capacity){
                    array[i] += passengers;
                    break;
                }
            }
        } else {
            let wagonWithPassengers = Number(command[1]);
            array.push(wagonWithPassengers);
        }
    }
    console.log(array.join(' '));
}
train(['32 54 21 12 4 0 23','75', 'Add 10', 'Add 0', '30', '10', '75'])