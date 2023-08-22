function wordTracker(input){
    let wordsToTrack = input.shift().split(' ');
    let assocArr = {};

    for (let el of wordsToTrack){
        assocArr[el] = 0;
    }

    for (let element of input){
        if (assocArr.hasOwnProperty(element)){
            assocArr[element] += 1;
        }
    }

    let sortedArr = Object.entries(assocArr).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sortedArr){
        console.log(`${key} - ${value}`);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])