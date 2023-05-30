function arrayManipulations(arr){
    let array = arr.shift();
    let arrayOfNums = array.split(' ').map(Number);

    function add(element){
        arrayOfNums.push(element);
    }

    function remove(element){
        arrayOfNums = arrayOfNums.filter(x => x != element);
    }

    function removeAt(index){
        arrayOfNums.splice(index, 1);
    }

    function insert(number, index){
        arrayOfNums.splice(index, 0, number);
    }

    for (let i = 0; i < arr.length; i++){
        let command = arr[i].split(' ');
        let action = command[0];
        let firstNum = Number(command[1]);

        if (action === 'Add'){
            add(firstNum);
        } else if (action === 'Remove'){
            remove(firstNum);
        } else if (action === 'RemoveAt'){
            removeAt(firstNum);
        } else if (action === 'Insert'){
            let secondNum = Number(command[2]);
            insert(firstNum, secondNum);
        }
    }
    console.log(arrayOfNums.join(' '));
}

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
);