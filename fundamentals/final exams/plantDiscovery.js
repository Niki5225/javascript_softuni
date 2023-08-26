function plantDiscovery(input) {

    function validateIfPlant(plant) {
        return plants.hasOwnProperty(plant)
    }

    function update(plant, rarity) {
        if (validateIfPlant(plant)) {
            plants[plant][0] = rarity;
        } else {
            console.log('error');
        }
    }

    function reset(plant) {
        if (validateIfPlant(plant)) {
            let value = plants[plant];
            value = [value[0]];
            plants[plant] = value;
        } else {
            console.log('error');
        }
    }

    function rate(plant, rating) {
        if (validateIfPlant(plant)) {
            plants[plant].push(rating);
        } else {
            console.log('error');
        }
    }

    function exhibition() {
        console.log("Plants for the exhibition:");
        for (let [key, value] of Object.entries(plants)) {
            let rarity = value.shift();
            let total = 0;
            for (let el of value) {
                total += el
            }
            let average = undefined
            if (value.length > 0){
                average = total / value.length;
            } else {
                average = 0;
            }
            console.log(`- ${key}; Rarity: ${rarity}; Rating: ${average.toFixed(2)}`);
        }
    }

    let number = Number(input.shift());
    let plants = {};
    for (let i = 0; i < number; i++) {
        let [plant, rarity] = input[i].split('<->');
        plants[plant] = [Number(rarity)];
    }

    let actions = input.slice(number);

    for (let el of actions) {
        let [command, info] = el.split(': ');

        switch (command) {
            case 'Rate':
                let elements = info.split(' - ');
                rate(elements[0], Number(elements[1]));
                break;
            case 'Update':
                let e = info.split(' - ');
                update(e[0], Number(e[1]));
                break;
            case 'Reset':
                reset(info);
                break;
            case 'Exhibition':
                exhibition();
                return;
        }
    }
}

plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)