function password_guess(arr){
    let searched_pass = "s3cr3t!P@ssw0rd"
    let guess = arr[0]
    if (searched_pass === guess) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}
password_guess((["s3cr3t!P@ssw0rd"]))