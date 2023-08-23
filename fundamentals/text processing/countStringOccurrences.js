function countStringOccurrences(str, word){
    let counter = 0;
    let arrSentence = str.split(' ');

    for (let el of arrSentence){
        if (el === word){
            counter++;
        }
    }

    console.log(counter)
}

countStringOccurrences('This is a word and it also is a sentence',
    'is');