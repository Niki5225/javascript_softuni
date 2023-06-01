function shoppingList(array){

    function urgent(item){
        if (!(initialList.includes(item))){
            initialList.unshift(item);
        }
    }

    function unnecessary(item){
        if (initialList.includes(item)){
            initialList = initialList.filter(x => x !== item);
        }
    }

    function correct(oldItem, newItem){
        if (initialList.includes(oldItem)) {
            let index = initialList.indexOf(oldItem);
            initialList[index] = newItem;
        }
    }

    function rearrange(item){
        if (initialList.includes(item)){
            initialList = initialList.filter(x => x !== item);
            initialList.push(item);
        }
    }

    let initialList = array.shift().split('!');

    for (let i = 0; i <= array.length - 1; i++){
        let startCommand = array[i];
        if (startCommand === 'Go Shopping!'){
            break;
        }
        
        let command = startCommand.split(' ');
        let action = command[0];
        let value1 = command[1];

        switch (action){
            case 'Urgent':
                urgent(value1);
                break;
            case 'Unnecessary':
                unnecessary(value1);
                break;
            case 'Correct':
                let value2 = command[2];
                correct(value1, value2);
                break;
            case 'Rearrange':
                rearrange(value1);
                break;
            default:
                break;
        }
    }

    console.log(initialList.join(', '));
}
shoppingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

);