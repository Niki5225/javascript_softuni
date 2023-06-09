function toJSON(name, lastName, hairColour){
    let obj = {name, lastName, hairColour};

    let strJSON = JSON.stringify(obj);

    console.log(strJSON);
}

toJSON('George', 'Jones', 'Brown');