function arrayModifier(array) {
    let arrayOfNums = array.shift().split(' ').map(Number);

    function swap(index1, index2) {
        let num1 = arrayOfNums[index1];
        let num2 = arrayOfNums[index2];

        arrayOfNums[index1] = num2;
        arrayOfNums[index2] = num1;
    }

    function multiply(index1, index2) {
        arrayOfNums[index1] = arrayOfNums[index1] * arrayOfNums[index2];
    }

    function decrease() {
        for (let i = 0; i < arrayOfNums.length; i++) {
            arrayOfNums[i] -= 1;
        }
    }

    for (let j = 0; j < array.length; j++) {
        let command = array[j].split(' ');
        let action = command[0];

        if (action === 'end') {
            break;
        }

        switch (action) {
            case 'decrease':
                decrease();
                break;
            case 'swap':
                let index1 = Number(command[1]);
                let index2 = Number(command[2]);

                swap(index1, index2);
                break;
            case 'multiply':
                let idx1 = Number(command[1]);
                let idx2 = Number(command[2]);

                multiply(idx1, idx2);
                break;
        }
    }
    console.log(arrayOfNums.join(', '));

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);