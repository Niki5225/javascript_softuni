function modernTimes(input){
    let sentence = input.split(' ');
    let validWords = [];

    function validateWord(word){
        for (let i = 0; i < word.length; i++){
            if (i === 0 && word[0] !== '#'){
                return false;
            }
            if (word.length === 1){
                return false;
            }
            if (i > 0){
                if (!((word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) || (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122))){
                    return false;
                }
            }
        }
        return true;
    }

    for (let i = 0; i < sentence.length; i++){
        let word = sentence[i];
        if (validateWord(word)){
            let validWord = word.slice(1);
            validWords.push(validWord);
        }
    }
    console.log(validWords.join('\n'));
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')