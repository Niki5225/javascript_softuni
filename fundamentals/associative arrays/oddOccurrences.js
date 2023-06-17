function oddOccurrences(array){
    let map = new Map();

    let els = array.split(' ')

    let occurrences = 0;
    
    for (let i of els){
        element = i.toLowerCase();
        if (map.has(element)){
            occurrences = map.get(element) + 1;
        } else {
            occurrences = 1;
        }

        map.set(element, occurrences);
    }

    let entries = Array.from(map);

    let result = [];

    for (let [word, times] of entries){
        if (times % 2 !== 0){
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');