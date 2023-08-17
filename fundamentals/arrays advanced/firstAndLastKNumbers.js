function firstAndLastKNumbers(data) {
    let k = data.shift();
    let firstK = data.slice(0, k);
    let lastK = data.slice(data.length - k);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9, 7, 7, 8]);