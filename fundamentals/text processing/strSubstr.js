function strSubstr(word, input){
    let sentence = input.toLowerCase().split(' ');
    if (sentence.includes(word)){
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

strSubstr('javascript',
    'JavaScript is the best programming language');