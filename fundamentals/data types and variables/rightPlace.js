function rightPlace(str, replaceItem, expectedResult) {
    let result = str.replace('_', replaceItem);
    if (result === expectedResult) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I',
    'Strong');