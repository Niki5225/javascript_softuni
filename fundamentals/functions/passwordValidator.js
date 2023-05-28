function passValidator(password) {
    function validateLen(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function validateContent(password) {
        for (char of password) {
            if (!(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 122)) {
                return false;
            }
        }
        return true;
    }

    function validateIfAtLeastTwoDigits(password) {
        let counter = 0;
        for (let element of password) {
            let asciValue = element.charCodeAt(0);
            if (asciValue >= 48 && asciValue <= 57) {
                counter += 1;
            }
        }
        return counter >= 2;
    }

    firstConditon = validateLen(password);
    secondConditon = validateContent(password);
    thirdConditon = validateIfAtLeastTwoDigits(password);

    if (!firstConditon){
        console.log("Password must be between 6 and 10 characters");
    }
    if (!secondConditon){
        console.log("Password must consist only of letters and digits");
    }
    if (!thirdConditon){
        console.log("Password must have at least 2 digits");
    }
    
    if (firstConditon && secondConditon && thirdConditon){
        console.log("Password is valid");
    }
}

passValidator('Pa$s$s');