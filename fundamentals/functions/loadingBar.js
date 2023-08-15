function loadingBar(number) {
    let bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];

    for (let i = 0; i < number / 10; i += 1) {
        bar[i] = '%';
    }

    if (number === 100){
        console.log(`100% Complete!`);
    } else {
        console.log(`${number}% [${bar.join('')}]`);
        console.log(`Still loading...`)
    }
}

loadingBar(100);