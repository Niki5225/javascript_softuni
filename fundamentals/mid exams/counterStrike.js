function cs(array) {
    let energy = Number(array.shift());
    let wonBattles = 0;

    while (true) {
        let command = array.shift();

        if (command === "End of battle") {
            console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
            break;
        }

        let currentBattle = Number(command);

        if (currentBattle > energy) {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;
        } else {
            energy -= currentBattle;
            wonBattles += 1;
            if (wonBattles % 3 === 0) {
                energy += wonBattles;
            }
        }
    }
}
cs((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])

);