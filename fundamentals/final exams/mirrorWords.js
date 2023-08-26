function mirrorWords(input){
    let pattern = /(?<separator>[@|#]{1})(?<word>[a-zA-z]{3,})(\k<separator>)(\k<separator>)(?<word2>[a-zA-z]{3,})(\k<separator>)/gm

    let matches = [...input[0].matchAll(pattern)];

    function findMirrorWords(wordMatches){
        let mirrorWords = [];
        for (let element of wordMatches){
            if (element[0] === Array.from(element[1]).reverse().join('')){
                mirrorWords.push(element);
            }
        }
        return mirrorWords;
    }

    if (matches.length > 0){
        console.log(`${matches.length} word pairs found!`);
        let wordMatches = [];
        for (let match of matches){
            const {word, word2} = match.groups;
            wordMatches.push([word, word2]);
        }
        let mirrorWords = findMirrorWords(wordMatches);
        let result = [];
        for (let element of mirrorWords){
            result.push(`${element[0]} <=> ${element[1]}`);
        }
        if (result.length > 0){
            console.log('The mirror words are:');
            console.log(result.join(', '));
        } else {
            console.log("No mirror words!");
        }

    } else {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }

}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);