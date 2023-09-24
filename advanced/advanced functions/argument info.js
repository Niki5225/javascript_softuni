function argumentInfo(...args){
    let obj = {};

    for (const el of args) {
        if (obj.hasOwnProperty(typeof el)){
            obj[typeof el] += 1;
        } else {
            obj[typeof el] = 1;
        }

        console.log(`${typeof el}: ${el}`);
    }

    const items = Object.keys(obj).map(function(key) {
        return [key, obj[key]];
    });

    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    items.forEach(i => console.log(`${i[0]} = ${i[1]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });