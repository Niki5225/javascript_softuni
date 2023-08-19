function movingTarget(input) {

    function validateIndex(index) {
        return (index >= targets.length || index < 0);
    }

    function shoot(index, power) {
        if (!validateIndex(index)) {
            targets[index] -= power;
            if (targets[index] <= 0) {
                targets.splice(index, 1);
            }
        }
    }

    function add(index, value) {
        if (!validateIndex(index)) {
            targets.splice(index, 0, value);
        } else {
            console.log("Invalid placement!");
        }
    }

    function strike(index, radius) {
        if (!validateIndex(index - radius) && !validateIndex(index + radius)) {
            let elementsToRemove = radius * 2 + 1;
            targets.splice(index - radius, elementsToRemove);
        } else {
            console.log("Strike missed!");
        }
    }

    function end() {
        console.log(targets.join('|'));
    }

    let targets = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(' ');
        let [command, index, value] = info;
        index = parseInt(index);
        value = parseInt(value);

        switch (command) {
            case 'Shoot':
                shoot(index, value);
                break;
            case 'Add':
                add(index, value);
                break;
            case 'Strike':
                strike(index, value);
                break;
            case 'End':
                end();
                return;
        }
    }
}

movingTarget((["1 2 3 4 5",
    "Strike 0 1",
    "End"])

);