function pascalCaseSplitter(input){
    let words = [];
    let word = ''
    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (char === char.toUpperCase()) {
            if (word !== '') {
                words.push(word);
            }
            word = char;
        } else {
            word += char;
        }
    }

    if (word !== '') {
        words.push(word);
    }
    console.log(words.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');