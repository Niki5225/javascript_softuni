function replaceRepeatingChars(str){
    let currentChar = undefined;
    let result = '';

    for (let element of str){
        if (!(currentChar === element)){
            currentChar = element;
            result += element;
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')