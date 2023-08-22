function aMinerTask(input){
    let resources = {};

    for (let i = 0; i < input.length - 1; i += 2){
        if (resources.hasOwnProperty(input[i])){
            resources[input[i]] += Number(input[i + 1]);
        } else {
            resources[input[i]] = Number(input[i + 1]);
        }
    }

    for (let [key, value] of Object.entries(resources)){
        console.log(`${key} -> ${value}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);