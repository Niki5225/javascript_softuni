function extractFile(input){
    let data = input.split('\\');
    let neededInfo = data[data.length - 1].split('.');
    if (neededInfo.length > 2){
        let fileName = [];
        for (let i = 0; i < neededInfo.length - 1; i++){
            fileName.push(neededInfo[i]);
        }
        console.log(`File name: ${fileName.join('.')}`);
    } else {
        console.log(`File name: ${neededInfo[0]}`);

    }
    console.log(`File extension: ${neededInfo[neededInfo.length - 1]}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');