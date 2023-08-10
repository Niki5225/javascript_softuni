function sumOfOddNums(number) {
    let sum = 0;
    let counter = 0;
    let current_num = 1;

    while (counter < number) {
        if (current_num % 2 !== 0) {
            console.log(current_num);
            counter++;
            sum += current_num;
        }
        current_num++;
    }
    console.log(`Sum: ${sum}`)
}

sumOfOddNums(3);