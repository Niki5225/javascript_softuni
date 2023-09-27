function add(num) {
    let sum = num;

    function calculate(num2) {
        sum += num2;
        return calculate;
    }

    calculate.toString = function () {
        return sum;
    };

    return calculate;

}

console.log(add(4)(5)(-3));
