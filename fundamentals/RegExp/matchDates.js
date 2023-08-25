function matchDates(input){
    let text = input[0];

    let pattern = /(?<day>[0-9]{2})(?<separator>[\.|\-|\/])(?<month>[A-Z]{1}[a-z]{2})(\k<separator>)([0-9]{4})/gm;

    let matches = [...text.matchAll(pattern)];

    for (let match of matches){
        console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[5]}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);