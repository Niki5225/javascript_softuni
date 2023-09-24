function cars(arr){
    let objects = {};

    function create(name){
        objects[name] = {};
    }

    function createWithInherit(name, parent){
        objects[name] = Object.create(objects[parent]);
    }

    function set(name, key, value){
        objects[name][key] = value;
    }

    function print(name){
        let res = [];
        for (const obj in objects[name]) {
            res.push(`${obj}:${objects[name][obj]}`);
        }
        console.log(res.join(','));
    }

    for (const element of arr) {
        const commands = element.split(' ');
        const command = commands[0];

        if (command === 'create' && commands.length === 2){
            create(commands[1]);
        } else if (command === 'create' && commands.length === 4){
            createWithInherit(commands[1], commands[3]);
        } else if (command === 'print'){
            print(commands[1]);
        } else if (command === 'set'){
            set(commands[1], commands[2], commands[3]);
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'set c1 rank 777',
    'print c1',
    'print c2']);