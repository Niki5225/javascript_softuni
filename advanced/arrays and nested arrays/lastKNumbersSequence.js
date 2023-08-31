function lastKNumbersSequence(n, k) {
    let arr = [1];

    while (arr.length < n) {
        if (arr.length < k) {
            let num = 0;
            for (let el of arr) {
                num += el;
            }
            arr.push(num);
        } else {
            let number = 0
            for (let j = arr.length - k; j < arr.length; j++) {
                number += arr[j];
            }
            arr.push(number);
        }
    }
    console.log(arr.join(' '));
}

lastKNumbersSequence(8, 2);