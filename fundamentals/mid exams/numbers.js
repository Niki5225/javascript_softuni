function numbers(array) {
    let numArray = array.split(' ').map(Number);
    let sumElements = 0;
    for (let element of numArray) {
        sumElements += element;
    }
    let average = sumElements / numArray.length;
    let greaterThanAverage = [];

    for (let element of numArray) {
        if (element > average) {
            greaterThanAverage.push(element);
        }
    }

    if (greaterThanAverage.length === 0) {
        console.log('No');
    } else {
        greaterThanAverage.sort((a, b) => b - a);
        let result = [];
        for (let i = 0; i < 5; i++) {
            result.push(greaterThanAverage[i]);
        }
        console.log(result.join(' '));
    }
}

numbers('1');