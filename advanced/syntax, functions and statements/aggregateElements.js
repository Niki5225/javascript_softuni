function aggregateElements(input){
    function sum(){
        let total = 0;
        for (let element of input){
            total += element;
        }
        return total;
    }

    function concat(){
        let result = '';
        for (let element of input){
            result += String(element);
        }
        return result;
    }

    function sumInverseValues(){
        let total = 0;
        for (let element of input){
            total += 1 / element;
        }
        return total;
    }

    console.log(sum());
    console.log(sumInverseValues());
    console.log(concat());
}

aggregateElements([1, 2, 3]);