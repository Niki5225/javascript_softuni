function calorieObject(array){
    let obj = {};

    for (let i = 0; i < array.length - 1; i += 2){
        obj[array[i]] = parseInt(array[i + 1]);
    }
    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'] );