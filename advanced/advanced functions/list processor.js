function listProcessor(data){
    let result = [];

    function add(value){
        result.push(value);
    }

    function remove(value){
        result = result.filter(el => el !== value);
    }

    function print(){
        console.log(result.join(','));
    }

    for (const el of data) {
        let [command, value] = el.split(' ');
        switch (command){
            case 'add':
                add(value);
                break;
            case 'remove':
                remove(value);
                break;
            case 'print':
                print();
                break;
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);