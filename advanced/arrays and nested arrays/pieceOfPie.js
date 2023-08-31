function pieceOfPie(array, startStr, endStr){
    let startIndex = array.indexOf(startStr);
    let endIndex = array.indexOf(endStr);
    let result = array.slice(startIndex, endIndex + 1);
    return result.join('\n');
}

pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);