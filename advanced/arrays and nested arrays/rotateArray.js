function rotateArray(array, times){
    let result = array;

    for (let i = 0; i < times; i++){
        result.unshift(result.pop());
    }
    console.log(result.join(' '));
}

rotateArray(['1',
        '2',
        '3',
        '4'],
    2)