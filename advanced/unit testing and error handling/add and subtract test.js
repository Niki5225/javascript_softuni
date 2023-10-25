const chai = require('chai');
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('calculator test', function (){
    it('tests method add', function (){
        let num = 5;
        const calculator = createCalculator();
        calculator.add(num);
        chai.expect(calculator.get()).to.equal(5);
    })
})

describe('calculator test', function (){
    it('tests method subtract', function (){
        let num = 5;
        const calculator = createCalculator();
        calculator.subtract(num);
        chai.expect(calculator.get()).to.equal(-5);
    })
})