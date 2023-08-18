function arrayModifier(input) {
    function swap(index1, index2) {
        let value1 = array[index1];
        let value2 = array[index2];

        array[index1] = value2;
        array[index2] = value1;
    }

    function multiply(index1, index2) {
        let result = array[index1] * array[index2];
        array[index1] = result;
    }

    function decrease() {
        for (let i = 0; i < array.length; i++) {
            array[i] -= 1;
        }
    }

    let array = input.shift().split(' ').map(Number);

    for (let element of input) {
        let command = element.split(' ');
        let action = command.shift();
        let values = command.map(Number);
        switch (action) {
            case 'decrease':
                decrease();
                break;
            case 'multiply':
                multiply(values[0], values[1]);
                break;
            case 'swap':
                swap(values[0], values[1]);
                break;
            case 'end':
                console.log(array.join(', '));
                return;
        }
    }
}

arrayModifier([
        '1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end'
    ]
);