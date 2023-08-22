function oddOccurrences(input) {
    let assocArr = {};
    let elements = input.split(' ');

    for (let element of elements) {
        let currentEl = element.toString().toLowerCase();

        if (assocArr.hasOwnProperty(currentEl)) {
            assocArr[currentEl] += 1;
        } else {
            assocArr[currentEl] = 1;
        }
    }

    let result = [];
    for (let [key, value] of Object.entries(assocArr)) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');