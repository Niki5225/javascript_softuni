function game(array){
    let health = 100;
    let coins = 0;
    let arr = String(array).split("|");
    
    for (let i = 0; i < arr.length; i++){
        let currentRoom = String(arr[i]).split(" ");

        if (currentRoom[0] === "potion"){
            healedWith = 0;
            if (Number(currentRoom[1]) + health > 100){
                healedWith = 100 - health;
                health = 100;
            } else {
                health += Number(currentRoom[1]);
                healedWith = Number(currentRoom[1]);
            }
            console.log(`You healed for ${healedWith} hp.`)
            console.log(`Current health: ${health} hp.`);
        } else if (currentRoom[0] === "chest") {
            coins += Number(currentRoom[1]);
            console.log(`You found ${currentRoom[1]} coins.`);
        } else {
            health -= Number(currentRoom[1]);

            if (health <= 0){
                console.log(`You died! Killed by ${currentRoom[0]}.` );
                console.log(`Best room: ${i + 1}`);
                return;
            } else{
                console.log(`You slayed ${currentRoom[0]}.`);
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);


}

game(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);