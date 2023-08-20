function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = input.split('|');
    let bestRoom = 1;
    let dead = false;

    function potion(healing) {
        let initialHealth = health;
        health += healing;
        if (health > 100) {
            health = 100;
        }
        let healedWith = health - initialHealth;
        console.log(`You healed for ${healedWith} hp.`);
        console.log(`Current health: ${health} hp.`);
        bestRoom++;
    }

    function chest(coins) {
        bitcoins += coins;
        console.log(`You found ${coins} bitcoins.`);
        bestRoom++;
    }

    function monster(monster, healthMonster) {
        health -= healthMonster;

        if (health <= 0) {
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${bestRoom}`);
            dead = true;
        } else {
            console.log(`You slayed ${monster}.`);
        }
        bestRoom++
    }

    for (let room of rooms) {
        let [action, value] = room.split(' ');
        let intValue = parseInt(value);

        switch (action) {
            case 'potion':
                potion(intValue);
                break;
            case 'chest':
                chest(intValue);
                break;
            default:
                monster(action, intValue);
                break;
        }

        if (dead) {
            return;
        }
    }
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");