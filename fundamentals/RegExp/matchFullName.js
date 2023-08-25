function matchFullName(input){
    let pattern = /\b(?<firstName>[A-Z]{1}[a-z]+) (?<lastName>[A-Z]{1}[a-z]+)\b/gm;

    let match = pattern.exec(input);

    let result = [];

    while (match){
        result.push(match[0]);
        match = pattern.exec(input);
    }
    console.log(result.join(' '));
}

matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov')