function wordTracker(array){
    let currentSearchedElemenrs = array[0].split(' ');
    array.shift()

    let map = new Map();
    for (let i = 0; i <= currentSearchedElemenrs.length - 1; i++){
        map.set(currentSearchedElemenrs[i], 0);
    }

    for (let element of array){
        if (map.has(element)){
            coincidences = map.get(element) + 1; 
            map.set(element, coincidences);
        }
    }

    let entries = Array.from(map)
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    for (let [word, coincidences] of entries){
        console.log(`${word} - ${coincidences}`);
    }
}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );