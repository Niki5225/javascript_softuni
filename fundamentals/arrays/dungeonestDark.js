function dungeonestDark(array){
    let health = 100;
    let coins = 0;
    let elements = array[0].split('|');

    for (let i = 0; i < elements.length; i++){
        let current_el = elements[i].split(' ');
        let obj = current_el[0];
        let stats = Number(current_el[1]);

        if (obj === 'potion'){
            let initialHealth = health;
            health += stats;
            if (health > 100){
                health = 100;
            }
            console.log(`You healed for ${health - initialHealth} hp.`);
            console.log(`Current health: ${health} hp.`)
        } else if (obj === 'chest'){
            coins += stats;
            console.log( `You found ${stats} coins.`);
        } else {
            health -= stats;
            if (health <= 0){
                console.log(`You died! Killed by ${obj}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            } else {
                console.log(`You slayed ${obj}.`);
            }
        }
    }
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);