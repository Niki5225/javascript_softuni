function login(array) {
    let username = array[0];
    let password = username.split('').reverse().join('');

    for (let i = 1; i <= 3; i++) {
        if (password === array[i]) {
            console.log(`User ${username} logged in.`);
            return
        } else {
            console.log("Incorrect password. Try again.");
        }
    }
    if (password === array[4]) {
        console.log(`User ${username} logged in.`);
    } else {
        console.log(`User ${username} blocked!`);
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);