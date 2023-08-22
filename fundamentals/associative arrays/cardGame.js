function cardGame(input) {
    let people = {};
    let powerOfCard = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };

    let typeOfCard = {'S': 4, 'H': 3, 'D': 2, 'C': 1,};

    for (let element of input) {
        let info = element.split(': ');
        let name = info.shift();
        let cards = info[0].split(', ');

        if (!people.hasOwnProperty(name)){
            people[name] = new Set();
        }

        for (let card of cards){
            people[name].add(card);
        }
    }

    for (let [key, value] of Object.entries(people)){
        let result = 0;
        let cards = Array.from(value);
        for (let cardPlayer of cards){
            if (cardPlayer.length > 2){
                result += powerOfCard[cardPlayer[0] + cardPlayer[1]] * typeOfCard[cardPlayer[2]];
            } else {
                result += powerOfCard[cardPlayer[0]] * typeOfCard[cardPlayer[1]];
            }
        }
        console.log(`${key}: ${result}`)
    }
}

cardGame([
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
);