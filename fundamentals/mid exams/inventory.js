function inventory(input) {

    function getIndexOfItem(item){
        return items.indexOf(item);
    }

    function validateIfItemInItems(item){
        return items.includes(item);
    }
    function collect(item) {
        if (!validateIfItemInItems(item)){
            items.push(item);
        }
    }

    function drop(item) {
        if (validateIfItemInItems(item)){
            let index = getIndexOfItem(item);
            items.splice(index, 1);
        }
    }

    function combine(oldItem, newItem) {
        if (validateIfItemInItems(oldItem)){
            let index = getIndexOfItem(oldItem);
            items.splice(index + 1, 0, newItem);
        }
    }

    function renew(item) {
        if (validateIfItemInItems(item)){
            let index = getIndexOfItem(item);
            items.splice(index, 1);
            items.push(item);
        }
    }

    function craft() {
        console.log(items.join(', '));
    }

    let items = input.shift().split(', ');

    for (let element of input) {
        let info = element.split(' - ');
        let command = info[0];

        switch (command) {
            case 'Combine Items':
                let [oldItem, newItem] = info[1].split(':');
                combine(oldItem, newItem);
                break;
            case 'Drop':
                drop(info[1]);
                break;
            case 'Renew':
                renew(info[1]);
                break;
            case 'Collect':
                collect(info[1]);
                break;
            case 'Craft!':
                craft();
                return;
        }
    }
}

inventory([
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
    ]
);