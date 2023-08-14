function charactersInRange(char1, char2) {
    let result = []
    if (char1.charCodeAt() < char2.charCodeAt()) {
        for (let i = char1.charCodeAt() + 1; i < char2.charCodeAt(); i++) {
            result.push(String.fromCharCode(i));
        }
    } else {
        for (let i = char2.charCodeAt() + 1; i < char1.charCodeAt(); i++) {
            result.push(String.fromCharCode(i));
        }
    }


    console.log(result.join(' '));
}

charactersInRange('C', '#');