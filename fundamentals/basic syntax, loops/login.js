function login(arr){
    let username = arr[0];
    let len = arr.length
    let password = username.split("").reverse().join("")
    let counter = 0
    for (let i = 1; i <= len; i++){
        if (password === arr[i]){
            console.log(`User ${username} logged in.`)
            break;
        } else {
            counter += 1
            if (counter === 4){
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log("Incorrect password. Try again.")
        }
    }
}
login(["acer", "acer", "acer", "ee"])