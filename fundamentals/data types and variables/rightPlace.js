function rightPlace(str1, char, str2){
    let result = str1.replace("_", char)
    if (result === str2){
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }
}
rightPlace("Str_ng", "o", "Strong")