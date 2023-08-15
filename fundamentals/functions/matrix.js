function matrix(n){
    let array = [];
    for (let i = 0; i < n; i++){
        let array2 = [];
        for (let j =0; j < n; j++){
            array2.push(n);
        }
        array.push(array2);
    }

    for (let arr of array){
        console.log(arr.join(' '));
    }
}

matrix(7)