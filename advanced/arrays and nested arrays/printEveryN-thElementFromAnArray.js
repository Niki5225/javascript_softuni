function printEveryNThElementFromAnArray(array, step) {
    let result = [];

    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }

    return Array.from(result);
}

printEveryNThElementFromAnArray(['5',
        '20',
        '31',
        '4',
        '20'],
    2
)