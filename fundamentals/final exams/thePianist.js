function thePianist(input) {
    let initialPieces = Number(input.shift());
    let catalogue = {};

    for (let i = 0; i < initialPieces; i++) {
        let [piece, author, key] = input[i].split('|');
        catalogue[piece] = [author, key];
    }

    let commands = input.slice(initialPieces);


    function add(currentPiece, composer, key) {
        if (catalogue.hasOwnProperty(currentPiece)) {
            console.log(`${currentPiece} is already in the collection!`);
        } else {
            catalogue[currentPiece] = [composer, key];
            console.log(`${currentPiece} by ${composer} in ${key} added to the collection!`);
        }
    }


    function remove(currentPiece) {
        if (catalogue.hasOwnProperty(currentPiece)) {
            delete catalogue[currentPiece];
            console.log(`Successfully removed ${currentPiece}!`);
        } else {
            console.log(`Invalid operation! ${currentPiece} does not exist in the collection.`);
        }
    }

    function changeKey(piece, newKey) {
        if (catalogue.hasOwnProperty(piece)) {
            catalogue[piece][1] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function stop() {
        for (let [key, value] of Object.entries(catalogue)){
            console.log(`${key} -> Composer: ${value[0]}, Key: ${value[1]}`);
        }
    }

    for (let element of commands) {
        let actions = element.split('|');
        let command = actions.shift();
        switch (command) {
            case 'Add':
                add(actions[0], actions[1], actions[2]);
                break;
            case 'Remove':
                remove(actions[0]);
                break;
            case 'ChangeKey':
                changeKey(actions[0], actions[1]);
                break;
            case 'Stop':
                stop();
                return;
        }
    }
}

thePianist([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
);