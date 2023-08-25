function matchPhoneNumber(input){
    let pattern = /\+359(?<space>[-| ]{1})2(\k<space>)([0-9]{3})(\k<space>)([0-9]{4})\b/gm;

    let match = pattern.exec(input);
    let result = [];

    while (match){
        result.push(match[0]);
        match = pattern.exec(input);
    }
    console.log(result.join(', '));
}

matchPhoneNumber(['+359 2 222 2222, 359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);