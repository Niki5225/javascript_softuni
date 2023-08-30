function cookingByNumbers(num, oper1, oper2, oper3, oper4, oper5){
    let arrOfCommands = [oper1, oper2, oper3, oper4, oper5];
    let number = Number(num);

    function chop(){
        return number / 2;
    }

    function dice(){
        return Math.sqrt(number);
    }

    function spice(){
        return number + 1;
    }

    function bake(){
        return number * 3;
    }

    function fillet(){
        return number - (number * 0.2);
    }

    for (let command of arrOfCommands){
        switch (command){
            case 'fillet':
                number = fillet();
                break;
            case 'spice':
                number = spice();
                break;
            case 'bake':
                number = bake();
                break;
            case 'chop':
                number = chop();
                break;
            case 'dice':
                number = dice();
                break;
        }
        console.log(number);
    }
}