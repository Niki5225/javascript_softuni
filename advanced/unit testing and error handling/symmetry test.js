let chai = require('chai');
function arrayIsSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }

    let reversed = arr.slice(0).reverse();
    let equal = JSON.stringify(arr) === JSON.stringify(reversed);
    return equal;
}

describe('assert that arr is symmetric', function () {
    it('should work properly', function () {
        let arr = [1, 2, 3, 3, 2, 1];

        let res = arrayIsSymmetric(arr);

        chai.expect(res).to.equal(true);

    })
})

describe('assert that arr is symmetric', function () {
    it('should not be equal', function () {
        let arr = [1, 2, 3, 3, 2, 16];

        let res = arrayIsSymmetric(arr);

        chai.expect(res).to.equal(false);

    })
})