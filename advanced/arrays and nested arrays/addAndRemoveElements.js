function addAndRemoveElements(array){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] === 'add'){
            result.push(i + 1);
        } else {
            if (result.length > 0){
                result.pop();
            }
        }
    }
    if (result.length > 0){
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)
