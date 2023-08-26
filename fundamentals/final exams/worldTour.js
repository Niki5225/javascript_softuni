function worldTour(input) {
    function validateIndex(index) {
        return index < stops.length && index >= 0;
    }

    function addStop(index, str) {
        if (validateIndex(index)){
            let arrStops = Array.from(stops);
            arrStops.splice(index, 0, str);
            stops = arrStops.join('');
        }
        console.log(stops);
    }

    function removeStop(startIndex, endIndex) {
        if (validateIndex(startIndex) && validateIndex(endIndex)) {
           let array = Array.from(stops);
           for (let i = startIndex; i <= endIndex; i++){
               array[i] = '';
           }
           stops = array.join('')
        }
        console.log(stops);
    }

    function switchStops(oldStr, newStr) {
        while (stops.includes(oldStr)) {
            stops = stops.replace(oldStr, newStr);
        }
        console.log(stops);
    }

    function travel() {
        console.log(`Ready for world tour! Planned stops: ${stops}`);
    }

    let stops = input.shift();

    for (let element of input) {
        let [command, el1, el2] = element.split(':');

        switch (command) {
            case 'Switch':
                switchStops(el1, el2);
                break;
            case 'Remove Stop':
                removeStop(Number(el1), Number(el2));
                break;
            case 'Add Stop':
                addStop(Number(el1), el2);
                break;
            case 'Travel':
                travel();
                return;
        }
    }

}

worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
);