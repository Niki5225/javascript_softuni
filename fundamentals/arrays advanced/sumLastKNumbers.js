function sumLastKNumbers(n, k) {
    let array = [1];
    while (array.length < n){
        let kArray = array.slice(-k);
        let nextNumber = 0;
        for (let element of kArray){
            nextNumber += element;
        }
        array.push(nextNumber);
    }
    console.log(array.join(' '));
}
sumLastKNumbers(6, 3);