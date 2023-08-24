function revealWords(input1, input2) {
    let words = input1.split(', ');
    let sentence = input2.split(' ');

    for (let i = 0; i < sentence.length; i++) {
        let element = sentence[i];
        if (element.includes('*')) {
            for (let word of words) {
                if (word.length === element.length) {
                    sentence[i] = word;
                }
            }
        }
    }
    console.log(sentence.join(' '))
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')