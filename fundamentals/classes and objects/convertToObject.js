function concertion(jsonStr){
    let obj = JSON.parse(jsonStr);

    for (let key of Object.keys(obj)){
        console.log(`${key}: ${obj[key]}`);
    }
}
concertion('{"name": "George", "age": 40, "town": "Sofia"}');