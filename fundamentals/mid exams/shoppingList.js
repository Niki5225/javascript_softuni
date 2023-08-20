function shoppingList(input){

    function getItemIndex(item){
        return items.indexOf(item);
    }

    function validateIfItemInList(item){
        return items.includes(item);
    }

    function urgent(item){
        if (!validateIfItemInList(item)){
            items.unshift(item);
        }
    }

    function unnecessary(item){
        if (validateIfItemInList(item)){
            let indexItem = getItemIndex(item);
            items.splice(indexItem, 1);
        }
    }

    function correct(oldItem, newItem){
        if (validateIfItemInList(oldItem)){
            let indexItem = getItemIndex(oldItem);
            items[indexItem] = newItem;
        }
    }

    function rearrange(item){
        if (validateIfItemInList(item)){
            let indexItem = getItemIndex(item);
            items.splice(indexItem, 1);
            items.push(item);
        }
    }

    function printShoppingList(){
        console.log(items.join(', '));
    }

    let items = input.shift().split('!');

    for (let element of input){
        let info = element.split(' ');
        let command = info[0];

        switch (command){
            case 'Unnecessary': unnecessary(info[1]); break;
            case 'Urgent': urgent(info[1]); break;
            case 'Correct': correct(info[1], info[2]); break;
            case 'Rearrange': rearrange(info[1]); break;
            case 'Go': printShoppingList(); break;
        }
    }
}

shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

);