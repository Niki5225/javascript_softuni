function arrayManipulations(input) {
    function add(number) {
        array.push(number);
    }

    function remove(element) {
        return array.filter(x => x !== element);
    }

    function removeAt(index) {
        array.splice(index, 1);
    }

    function insert(number, index) {
        array.splice(index, 0, number);

    }

    let array = input.shift().split(' ').map(x => Number(x));
    for (let element of input) {
        let currentElement = element.split(' ');
        let command = currentElement[0];
        let num1 = Number(currentElement[1]);
        switch (command) {
            case 'Add':
                add(num1);
                break;
            case 'Remove':
                array = remove(num1);
                break;
            case 'RemoveAt':
                removeAt(num1);
                break;
            case 'Insert':
                insert(num1, Number(currentElement[2]));
                break;
        }
    }
    console.log(array.join(' '));
}

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
)