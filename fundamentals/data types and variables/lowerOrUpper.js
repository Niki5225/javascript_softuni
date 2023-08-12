function lowerOrUpper(char){
    if (char.charCodeAt() < 97){
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

lowerOrUpper('A');