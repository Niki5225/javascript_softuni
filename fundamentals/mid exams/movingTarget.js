function movingTarget(array){
    arrayOfNums = array.shift().split(' ').map(Number);

    function indexValidation(index){
        if (index <= arrayOfNums.length - 1 && index >= 0){
            return true;
        } else {
            return false;
        }
    }

    function shoot(index, power){
        if (indexValidation(index)){
            arrayOfNums[index] -= power;
        }

        if (arrayOfNums[index] <= 0){
            arrayOfNums.splice(index, 1);
        }
    }

    function add(index, value){
        if (indexValidation(index)){
            arrayOfNums.splice(index, 0, value);
        } else {
            console.log("Invalid placement!");
        }
    }

    function strike(index, radius){
        if (indexValidation(index)){
            if (index - radius >= 0 && index + radius <= arrayOfNums.length - 1){
                arrayOfNums.splice(index - radius, 3);
            } else {
                console.log("Strike missed!");
            }
        }
    }


    for (let i = 0; i < array.length; i++){
        let command = array[i].split(' ');
        let action = command[0];
        let index = Number(command[1]);
        let value = Number(command[2]);

        if (action === 'End'){
            console.log(arrayOfNums.join('|'));
            break;
        }

        switch(action){
            case 'Shoot':
                shoot(index, value);
                break;
            case 'Add':
                add(index, value);
                break;
            case 'Strike':
                strike(index, value);
                break;
        }
    }
}

movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"])
);
