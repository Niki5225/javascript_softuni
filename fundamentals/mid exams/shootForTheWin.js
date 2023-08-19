function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let shotTargets = 0;

    function validateIndex(index){
        return (index >= targets.length || index < 0);
    }

    for (let command of input) {
        if (command === 'End') {
            break;
        }
        let index = Number(command);
        if (validateIndex(index)){
            continue;
        }
        let value = targets[index];

        if (value === -1) {
            continue;
        }

        for (let i = 0; i < targets.length; i++) {

            if (targets[i] === -1) {
                continue;
            }

            if (targets[i] <= value) {
                targets[i] += value;
            } else {
                targets[i] -= value;
            }
        }

        targets[index] = -1;
        shotTargets++;
    }
    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}

shootForTheWin((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
);