function theImitationGame(input) {

    function changeAll(substring, replacement){
        while (message.includes(substring)){
            message = message.replace(substring, replacement);
        }
    }

    function insert(index, value){
        let messageArr = Array.from(message);
        messageArr.splice(index, 0, value);
        message = messageArr.join('');
    }

    function decode(){
        console.log(`The decrypted message is: ${message}`);
    }

    function move(numberOfLetters){
        let letters = '';
        for (let i = 0; i < numberOfLetters; i++){
            letters += message[i];
        }

        message = message.slice(numberOfLetters);
        message += letters
    }

    let message = input.shift();

    for (let element of input) {
        let actions = element.split('|');
        let command = actions.shift();

        switch (command) {
            case 'ChangeAll':
                changeAll(actions[0], actions[1]);
                break;
            case 'Move':
                move(Number(actions[0]));
                break;
            case 'Insert':
                insert(Number(actions[0]), actions[1]);
                break;
            case 'Decode':
                decode()
                return;
        }
    }
}

theImitationGame([
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode',
    ]
);