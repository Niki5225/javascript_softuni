function Palindromes(arr){
    for (let i = 0; i < arr.length; i++){
        let strNum = String(arr[i]);
        let reversedStr = ''

        for (let j = strNum.length - 1; j >= 0; j--){
            reversedStr += strNum[j];
        }
        console.log(strNum === reversedStr);
    }
}

Palindromes([32,2,232,1010]);