function counterStrike(input) {
    let energy = Number(input.shift());
    let wonBattles = 0;

    for (let battle of input) {
        if (battle === 'End of battle') {
            console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
            break;
        }
        if (Number(battle) > energy) {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;
        }
        energy -= Number(battle);
        wonBattles++;

        if (wonBattles % 3 === 0 && wonBattles !== 0) {
            energy += wonBattles;
        }

    }
}

counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
);
