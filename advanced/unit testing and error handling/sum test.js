const chai = require('chai');
function sum(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

describe('sum function', function () {
    it('should sum correctly', function () {
        let arr = [1, 2, 3, 4, 5];

        let result = sum(arr);

        chai.expect(result).equal(15);
    })
})