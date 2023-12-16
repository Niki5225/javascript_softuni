function solve(arr) {
    function prepare(name, shift, coffee) {
        if (baristas[name][0] === shift && baristas[name][1].includes(coffee)) {
            console.log(`${name} has prepared a ${coffee} for you!`);
        } else {
            console.log(`${name} is not available to prepare a ${coffee}.`);
        }
    }

    function changeShift(name, shift) {
        baristas[name][0] = shift;
        console.log(`${name} has updated his shift to: ${shift}`);
    }

    function learn(name, coffee) {
        if (baristas[name][1].includes(coffee)) {
            console.log(`${name} knows how to make ${coffee}.`);
        } else {
            baristas[name][1].push(coffee);
            console.log(`${name} has learned a new coffee type: ${coffee}.`);
        }
    }

    const numberOfBaristas = Number(arr.shift());
    const baristas = {};

    for (let i = 0; i < numberOfBaristas; i++) {
        const [name, shift, coffeesStr] = arr.shift().split(' ');
        const coffees = coffeesStr.split(',');

        baristas[name] = [shift, coffees];
    }

    let elementsOfCommand = arr.shift();

    while (elementsOfCommand !== 'Closed') {
        elementsOfCommand = elementsOfCommand.split(' / ');
        const command = elementsOfCommand.shift();

        if (command === 'Prepare') {
            const [name, shift, coffee] = elementsOfCommand;
            prepare(name, shift, coffee);
        } else if (command === 'Change Shift') {
            const [name, shift] = elementsOfCommand;
            changeShift(name, shift);
        } else if (command === 'Learn') {
            const [name, coffee] = elementsOfCommand;
            learn(name, coffee);
        }


        elementsOfCommand = arr.shift();
    }

    for (const barista in baristas) {
        console.log(`Barista: ${barista}, Shift: ${baristas[barista][0]}, Drinks: ${baristas[barista][1].join(', ')}`);
    }

}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
)