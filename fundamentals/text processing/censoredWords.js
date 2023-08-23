function censoredWords(sentence, censoredWord) {
    let newSentence = sentence;
    if (sentence.includes(censoredWord)) {
        while (newSentence.includes(censoredWord)){
            newSentence = newSentence.replace(censoredWord, '*'.repeat(censoredWord.length));
        }
    } else {
        newSentence = sentence;
    }
    console.log(newSentence);
}

censoredWords('A small sentence with some words small',
    'small');