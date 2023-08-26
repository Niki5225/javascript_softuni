function secretChat(input){

    function insertSpace(index){
        let arrMessage = Array.from(message)
        arrMessage.splice(index, 0, ' ');
        message = arrMessage.join('');
        console.log(message);
    }

    function reverse(substring){
        if (message.includes(substring)){
            message = message.replace(substring, '');
            let str = Array.from(substring).reverse().join('');
            message += str;
            console.log(message);
        } else {
            console.log('error');
        }
    }

    function changeAll(substring, replacement){
        while (message.includes(substring)){
            message = message.replace(substring, replacement);
        }
        console.log(message);
    }

    function reveal(){
        console.log(`You have a new text message: ${message}`);
    }

    let message = input.shift();

    for (let element of input){
        let action = element.split(':|:');
        let command = action.shift();

        switch (command){
            case 'Reverse':
                reverse(action[0]);
                break;
            case 'ChangeAll':
                changeAll(action[0], action[1]);
                break;
            case 'InsertSpace':
                insertSpace(Number(action[0]));
                break;
            case 'Reveal':
                reveal();
                return;
        }
    }
}

secretChat([
        'Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    ]
);