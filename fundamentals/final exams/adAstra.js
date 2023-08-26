function adAstra(input) {
    let pattern = /(?<separator>[#|\|])(?<itemName>[A-Za-z\s]+)(\k<separator>)(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})(\k<separator>)(?<calories>[0-9]+)(\k<separator>)/gm

    let matches = [...input[0].matchAll(pattern)];
    let calories = 0;
    for (let match of matches){
        calories += Number(match[6]);
    }
    console.log(`You have food to last you for: ${Math.floor(calories / 2000)} days!`);

    for (let match of matches){
        console.log(`Item: ${match[2]}, Best before: ${match[4]}, Nutrition: ${match[6]}`);
    }
}

adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
)