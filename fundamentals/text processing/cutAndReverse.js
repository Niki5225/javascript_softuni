function cutAndReverse(sentence){
    let firstHalf = Array.from(sentence.slice(0, sentence.length / 2));
    let secondHalf = Array.from(sentence.slice(sentence.length / 2));

    console.log(firstHalf.reverse().join(''));
    console.log(secondHalf.reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT' )