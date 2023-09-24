function calculator() {
    let num1;
    let num2;
    let result;

    function initFunc(n1, n2, res) {
        num1 = document.querySelector(n1);
        num2 = document.querySelector(n2);
        result = document.querySelector(res);
    }

    function addFunc() {
        result.value = Number(num1.value) + Number(num2.value);
    }

    function subtractFunc() {
        result.value = Number(num1.value) - Number(num2.value);
    }

    return {
        init: initFunc,
        add: addFunc,
        subtract: subtractFunc,
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');