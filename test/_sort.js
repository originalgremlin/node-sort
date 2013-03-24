var assert = require('chai').assert,
    utils = require('./_utils'),
    Sort = require('../sorts/_sort');

describe('compare.byValue', function () {
    var compare = Sort.compare.byValue;

    it('should exist', function () {
        assert.isFunction(compare);
    });

    describe('when a < b', function () {
        it('should return a negative number (integer)', function () {
            assert.isNumber(compare(10, 20));
            assert(compare(10, 20) < 0);
            assert(compare(-20, -10) < 0);
            assert(compare(0, 10) < 0);
            assert(compare(-10, 0) < 0);
        });

        it('should return a negative number (float)', function () {
            assert.isNumber(compare(10.1, 20.1));
            assert(compare(10.1, 20.1) < 0);
            assert(compare(-20.1, -10.1) < 0);
            assert(compare(0.0, 10.1) < 0);
            assert(compare(-10.1, 0.0) < 0);
        });

        it('should return a negative number (string)', function () {
            assert.isNumber(compare('a', 'z'));
            assert(compare('a', 'z') < 0);
            assert(compare('A', 'Z') < 0);
            assert(compare('apple', 'zebra') < 0);
            assert(compare('Apple', 'Zebra') < 0);
            assert(compare('1', '9') < 0);
            assert(compare('1', '10') < 0);
            assert(compare('1', '19') < 0);
            assert(compare('11', '19') < 0);
        });
    });

    describe('when a > b', function () {
        it('should return a positive number (integer)', function () {
            assert.isNumber(compare(20, 10));
            assert(compare(20, 10) > 0);
            assert(compare(-10, -20) > 0);
            assert(compare(10, 0) > 0);
            assert(compare(0, -10) > 0);
        });

        it('should return a positive number (float)', function () {
            assert.isNumber(compare(20.1, 10.1));
            assert(compare(20.1, 10.1) > 0);
            assert(compare(-10.1, -20.1) > 0);
            assert(compare(10.1, 0.0) > 0);
            assert(compare(0.0, -10.1) > 0);
        });

        it('should return a positive number (string)', function () {
            assert.isNumber(compare('z', 'a'));
            assert(compare('z', 'a') > 0);
            assert(compare('Z', 'A') > 0);
            assert(compare('zebra', 'apple') > 0);
            assert(compare('Zebra', 'Apple') > 0);
            assert(compare('9', '1') > 0);
            assert(compare('10', '1') > 0);
            assert(compare('19', '1') > 0);
            assert(compare('19', '11') > 0);
        });
    });

    describe('when a === b', function () {
        it('should return 0 (integer)', function () {
            assert.isNumber(compare(10, 10));
            assert(compare(10, 10) === 0);
            assert(compare(-10, -10) === 0);
            assert(compare(0, 0) === 0);
        });

        it('should return 0 (float)', function () {
            assert.isNumber(compare(10.1, 10.1));
            assert(compare(10.1, 10.1) === 0);
            assert(compare(-10.1, -10.1) === 0);
            assert(compare(0.0, 0.0) === 0);
        });

        it('should return 0 (string)', function () {
            assert.isNumber(compare('a', 'a'));
            assert(compare('a', 'a') === 0);
            assert(compare('A', 'A') === 0);
            assert(compare('apple', 'apple') === 0);
            assert(compare('Apple', 'Apple') === 0);
            assert(compare('1', '1') === 0);
            assert(compare('10', '10') === 0);
        });
    });
});

describe('compare.byObjectValue', function () {
    var compare = Sort.compare.byObjectValue;

    it('should exist', function () {
        assert.isFunction(compare);
    });

    describe('when a < b', function () {
        it('should return a negative number (integer)', function () {
            assert.isNumber(compare({ key: 'a', value: 10 }, { key: 'b', value: 20 }));
            assert(compare({ key: 'a', value: 10 }, { key: 'b', value: 20 }) < 0);
            assert(compare({ key: 'a', value: -20 }, { key: 'b', value: -10 }) < 0);
            assert(compare({ key: 'a', value: 0 }, { key: 'b', value: 10 }) < 0);
            assert(compare({ key: 'a', value: -10 }, { key: 'b', value: 0 }) < 0);
        });

        it('should return a negative number (float)', function () {
            assert.isNumber(compare({ key: 'a', value: 10.1 }, { key: 'b', value: 20.1 }));
            assert(compare({ key: 'a', value: 10.1 }, { key: 'b', value: 20.1 }) < 0);
            assert(compare({ key: 'a', value: -20.1 }, { key: 'b', value: -10.1 }) < 0);
            assert(compare({ key: 'a', value: 0.0 }, { key: 'b', value: 10.1 }) < 0);
            assert(compare({ key: 'a', value: -10.1 }, { key: 'b', value: 0.0 }) < 0);
        });

        it('should return a negative number (string)', function () {
            assert.isNumber(compare({ key: 'a', value: 'a' }, { key: 'b', value: 'z' }));
            assert(compare({ key: 'a', value: 'a' }, { key: 'b', value: 'z' }) < 0);
            assert(compare({ key: 'a', value: 'A' }, { key: 'b', value: 'Z' }) < 0);
            assert(compare({ key: 'a', value: 'apple' }, { key: 'b', value: 'zebra' }) < 0);
            assert(compare({ key: 'a', value: 'Apple' }, { key: 'b', value: 'Zebra' }) < 0);
            assert(compare({ key: 'a', value: '1' }, { key: 'b', value: '9' }) < 0);
            assert(compare({ key: 'a', value: '1' }, { key: 'b', value: '10' }) < 0);
            assert(compare({ key: 'a', value: '1' }, { key: 'b', value: '19' }) < 0);
            assert(compare({ key: 'a', value: '11' }, { key: 'b', value: '19' }) < 0);
        });
    });

    describe('when a > b', function () {
        it('should return a positive number (integer)', function () {
            assert.isNumber(compare({ key: 'a', value: 20 }, { key: 'b', value: 10 }));
            assert(compare({ key: 'a', value: 20 }, { key: 'b', value: 10 }) > 0);
            assert(compare({ key: 'a', value: -10 }, { key: 'b', value: -20 }) > 0);
            assert(compare({ key: 'a', value: 10 }, { key: 'b', value: 0 }) > 0);
            assert(compare({ key: 'a', value: 0 }, { key: 'b', value: -10 }) > 0);
        });

        it('should return a positive number (float)', function () {
            assert.isNumber(compare({ key: 'a', value: 20.1 }, { key: 'b', value: 10.1 }));
            assert(compare({ key: 'a', value: 20.1 }, { key: 'b', value: 10.1 }) > 0);
            assert(compare({ key: 'a', value: -10.1 }, { key: 'b', value: -20.1 }) > 0);
            assert(compare({ key: 'a', value: 10.1 }, { key: 'b', value: 0.0 }) > 0);
            assert(compare({ key: 'a', value: 0.0 }, { key: 'b', value: -10.1 }) > 0);
        });

        it('should return a positive number (string)', function () {
            assert.isNumber(compare({ key: 'a', value: 'z' }, { key: 'b', value: 'a' }));
            assert(compare({ key: 'a', value: 'z' }, { key: 'b', value: 'a' }) > 0);
            assert(compare({ key: 'a', value: 'Z' }, { key: 'b', value: 'A' }) > 0);
            assert(compare({ key: 'a', value: 'zebra' }, { key: 'b', value: 'apple' }) > 0);
            assert(compare({ key: 'a', value: 'Zebra' }, { key: 'b', value: 'Apple' }) > 0);
            assert(compare({ key: 'a', value: '9' }, { key: 'b', value: '1' }) > 0);
            assert(compare({ key: 'a', value: '10' }, { key: 'b', value: '1' }) > 0);
            assert(compare({ key: 'a', value: '19' }, { key: 'b', value: '1' }) > 0);
            assert(compare({ key: 'a', value: '19' }, { key: 'b', value: '11' }) > 0);
        });
    });

    describe('when a === b', function () {
        it('should return 0 (integer)', function () {
            assert.isNumber(compare({ key: 'a', value: 10 }, { key: 'b', value: 10 }));
            assert(compare({ key: 'a', value: 10 }, { key: 'b', value: 10 }) === 0);
            assert(compare({ key: 'a', value: -10 }, { key: 'b', value: -10 }) === 0);
            assert(compare({ key: 'a', value: 0 }, { key: 'b', value: 0 }) === 0);
        });

        it('should return 0 (float)', function () {
            assert.isNumber(compare({ key: 'a', value: 10.1 }, { key: 'b', value: 10.1 }));
            assert(compare({ key: 'a', value: 10.1 }, { key: 'b', value: 10.1 }) === 0);
            assert(compare({ key: 'a', value: -10.1 }, { key: 'b', value: -10.1 }) === 0);
            assert(compare({ key: 'a', value: 0.0 }, { key: 'b', value: 0.0 }) === 0);
        });

        it('should return 0 (string)', function () {
            assert.isNumber(compare({ key: 'a', value: 'a' }, { key: 'b', value: 'a' }));
            assert(compare({ key: 'a', value: 'a' }, { key: 'b', value: 'a' }) === 0);
            assert(compare({ key: 'a', value: 'A' }, { key: 'b', value: 'A' }) === 0);
            assert(compare({ key: 'a', value: 'apple' }, { key: 'b', value: 'apple' }) === 0);
            assert(compare({ key: 'a', value: 'Apple' }, { key: 'b', value: 'Apple' }) === 0);
            assert(compare({ key: 'a', value: '1' }, { key: 'b', value: '1' }) === 0);
            assert(compare({ key: 'a', value: '10' }, { key: 'b', value: '10' }) === 0);
        });
    });
});

describe('#swap', function () {
    describe('integers', function () {
        var a = [],
            compare = Sort.compare.byObjectValue;
        beforeEach(function () {
            a = [1, 2, 3, 4, 5];
        });

        it('should return an array', function () {
            assert.isArray(Sort.swap(a, 1, 2));
        });

        it('should swap two elements (0,4)', function () {
            var expected = [5,2,3,4,1];
            Sort.swap(a, 0, 4);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (4,0)', function () {
            var expected = [5,2,3,4,1];
            Sort.swap(a, 4, 0);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (1,3)', function () {
            var expected = [1,4,3,2,5];
            Sort.swap(a, 1, 3);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (3,1)', function () {
            var expected = [1,4,3,2,5];
            Sort.swap(a, 3, 1);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (1,4)', function () {
            var expected = [1,5,3,4,2];
            Sort.swap(a, 1, 4);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (4,1)', function () {
            var expected = [1,5,3,4,2];
            Sort.swap(a, 4, 1);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (0,0)', function () {
            var expected = [1,2,3,4,5];
            Sort.swap(a, 0, 0);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (1,1)', function () {
            var expected = [1,2,3,4,5];
            Sort.swap(a, 1, 1);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (4,4)', function () {
            var expected = [1,2,3,4,5];
            Sort.swap(a, 4, 4);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });
    });

    describe('objects', function () {
        var a = [],
            compare = Sort.compare.byObjectValue;
        beforeEach(function () {
            a = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
        });

        it('should return an array', function () {
            assert.isArray(Sort.swap(a, 1, 2));
        });

        it('should swap two elements (0,4)', function () {
            var expected = [{ value: 5 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 1 }];
            Sort.swap(a, 0, 4);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (4,0)', function () {
            var expected = [{ value: 5 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 1 }];
            Sort.swap(a, 4, 0);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (1,3)', function () {
            var expected = [{ value: 1 }, { value: 4 }, { value: 3 }, { value: 2 }, { value: 5 }];
            Sort.swap(a, 1, 3);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (3,1)', function () {
            var expected = [{ value: 1 }, { value: 4 }, { value: 3 }, { value: 2 }, { value: 5 }];
            Sort.swap(a, 3, 1);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (1,4)', function () {
            var expected = [{ value: 1 }, { value: 5 }, { value: 3 }, { value: 4 }, { value: 2 }];
            Sort.swap(a, 1, 4);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (4,1)', function () {
            var expected = [{ value: 1 }, { value: 5 }, { value: 3 }, { value: 4 }, { value: 2 }];
            Sort.swap(a, 4, 1);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (0,0)', function () {
            var expected = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
            Sort.swap(a, 0, 0);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (1,1)', function () {
            var expected = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
            Sort.swap(a, 1, 1);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });

        it('should swap two elements (4,4)', function () {
            var expected = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
            Sort.swap(a, 4, 4);
            assert(utils.equals(a, expected, compare), JSON.stringify(a) + ' !== ' + JSON.stringify(expected));
        });
    });
});

// XXX: how do I test this? run it 1000 times and check for statistical improbabilities in the orderings?
// XXX: I just copied the (very simple) Fisher-Yates shuffle from Wikipedia, so it should be okay as is
describe('#shuffle', function () {
    var a = [];
    beforeEach(function () {
        a = [1, 2, 3, 4, 5];
    });

    it('should return an array', function () {
        assert.isArray(Sort.shuffle(a));
    });
});

describe('#isSorted', function () {
    it('should return true for sorted arrays', function () {
        var compare = Sort.compare.byValue;
        assert.isTrue(Sort.isSorted([], compare));
        assert.isTrue(Sort.isSorted([0], compare));
        assert.isTrue(Sort.isSorted([1], compare));
        assert.isTrue(Sort.isSorted([-1], compare));
        assert.isTrue(Sort.isSorted([1, 1, 1, 1, 1], compare));
        assert.isTrue(Sort.isSorted([-1, -1, -1, -1, -1], compare));
        assert.isTrue(Sort.isSorted([-1, -1, -1, 1, 1], compare));
        assert.isTrue(Sort.isSorted([1, 2, 3, 4, 5], compare));
        assert.isTrue(Sort.isSorted([-5, -4, -3, -2, -1], compare));
        assert.isTrue(Sort.isSorted([-2, -1, 3, 4, 5], compare));
        assert.isTrue(Sort.isSorted([0.1, 0.2, 0.3, 0.4, 0.5], compare));
        assert.isTrue(Sort.isSorted([-0.5, -0.4, -0.3, -0.2, -0.1], compare));
        assert.isTrue(Sort.isSorted([-0.5, -0.4, -0.3, 0.1, 0.2], compare));
        assert.isTrue(Sort.isSorted([1.1, 2, 3.3, 4, 5.5], compare));
        assert.isTrue(Sort.isSorted([-5.5, -4, -3.3, -2, -1.1], compare));
        assert.isTrue(Sort.isSorted([-5.5, -4, -3.3, 1.1, 2], compare));
        assert.isTrue(Sort.isSorted(['a', 'b', 'c', 'd', 'e'], compare));
        assert.isTrue(Sort.isSorted(['aa', 'ab', 'ac', 'ad', 'ae'], compare));
        assert.isTrue(Sort.isSorted(['A', 'B', 'C', 'D', 'E'], compare));
        assert.isTrue(Sort.isSorted(['apple', 'banana', 'carrot', 'date', 'ear of corn'], compare));
        assert.isTrue(Sort.isSorted(['Apple', 'Banana', 'Carrot', 'Date', 'Ear Of Corn'], compare));
    });

    it('should return false for unsorted arrays', function () {
        var compare = Sort.compare.byValue;
        assert.isFalse(Sort.isSorted([1, 1, 1, 0, 1], compare));
        assert.isFalse(Sort.isSorted([1, 1, 1, -1, 1], compare));
        assert.isFalse(Sort.isSorted([5, 4, 3, 2, 1], compare));
        assert.isFalse(Sort.isSorted([-1, -2, -3, -4, -5], compare));
        assert.isFalse(Sort.isSorted([-1, -2, -3, 4, 5], compare));
        assert.isFalse(Sort.isSorted([0.5, 0.4, 0.3, 0.2, 0.1], compare));
        assert.isFalse(Sort.isSorted([-0.1, -0.2, -0.3, -0.4, -0.5], compare));
        assert.isFalse(Sort.isSorted([0.1, 0.2, -0.3, -0.4, -0.5], compare));
        assert.isFalse(Sort.isSorted([5.5, 4, 3.3, 2, 1.1], compare));
        assert.isFalse(Sort.isSorted([1.1, 2, -3.3, -4, -5.5], compare));
        assert.isFalse(Sort.isSorted(['e', 'd', 'c', 'b', 'a'], compare));
        assert.isFalse(Sort.isSorted(['ae', 'ad', 'ac', 'ab', 'aa'], compare));
        assert.isFalse(Sort.isSorted(['E', 'D', 'C', 'B', 'A'], compare));
        assert.isFalse(Sort.isSorted(['ear of corn', 'date', 'carrot', 'banana', 'apple'], compare));
        assert.isFalse(Sort.isSorted(['Ear Of Corn', 'Date', 'Carrot', 'Banana', 'Apple'], compare));
    });

    it('should return true for sorted object arrays', function () {
        var compare = Sort.compare.byObjectValue;
        assert.isTrue(Sort.isSorted([{ value: 0 }], compare));
        assert.isTrue(Sort.isSorted([{ value: 1 }], compare));
        assert.isTrue(Sort.isSorted([{ value: -1 }], compare));
        assert.isTrue(Sort.isSorted([{ value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }, { value: 1 }], compare));
        assert.isTrue(Sort.isSorted([{ value: -1 }, { value: -1 }, { value: -1 }, { value: -1 }, { value: -1 }], compare));
        assert.isTrue(Sort.isSorted([{ value: -1 }, { value: -1 }, { value: -1 }, { value: 1 }, { value: 1 }], compare));
        assert.isTrue(Sort.isSorted([{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }], compare));
        assert.isTrue(Sort.isSorted([{ value: -5 }, { value: -4 }, { value: -3 }, { value: -2 }, { value: -1 }], compare));
        assert.isTrue(Sort.isSorted([{ value: -2 }, { value: -1 }, { value: 3 }, { value: 4 }, { value: 5 }], compare));
        assert.isTrue(Sort.isSorted([{ value: 0.1 }, { value: 0.2 }, { value: 0.3 }, { value: 0.4 }, { value: 0.5 }], compare));
        assert.isTrue(Sort.isSorted([{ value: -0.5 }, { value: -0.4 }, { value: -0.3 }, { value: -0.2 }, { value: -0.1 }], compare));
        assert.isTrue(Sort.isSorted([{ value: -0.5 }, { value: -0.4 }, { value: -0.3 }, { value: 0.1 }, { value: 0.2 }], compare));
        assert.isTrue(Sort.isSorted([{ value: 1.1 }, { value: 2 }, { value: 3.3 }, { value: 4 }, { value: 5.5 }], compare));
        assert.isTrue(Sort.isSorted([{ value: -5.5 }, { value: -4 }, { value: -3.3 }, { value: -2 }, { value: -1.1 }], compare));
        assert.isTrue(Sort.isSorted([{ value: -5.5 }, { value: -4 }, { value: -3.3 }, { value: 1.1 }, { value: 2 }], compare));
        assert.isTrue(Sort.isSorted([{ value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'd' }, { value: 'e' }], compare));
        assert.isTrue(Sort.isSorted([{ value: 'aa' }, { value: 'ab' }, { value: 'ac' }, { value: 'ad' }, { value: 'ae' }], compare));
        assert.isTrue(Sort.isSorted([{ value: 'A' }, { value: 'B' }, { value: 'C' }, { value: 'D' }, { value: 'E' }], compare));
        assert.isTrue(Sort.isSorted([{ value: 'apple' }, { value: 'banana' }, { value: 'carrot' }, { value: 'date' }, { value: 'ear of corn' }], compare));
        assert.isTrue(Sort.isSorted([{ value: 'Apple' }, { value: 'Banana' }, { value: 'Carrot' }, { value: 'Date' }, { value: 'Ear Of Corn' }], compare));
    });

    it('should return false for unsorted object arrays', function () {
        var compare = Sort.compare.byObjectValue;
        assert.isFalse(Sort.isSorted([{ value: 1 }, { value: 1 }, { value: 1 }, { value: 0 }, { value: 1 }], compare));
        assert.isFalse(Sort.isSorted([{ value: 1 }, { value: 1 }, { value: 1 }, { value: -1 }, { value: 1 }], compare));
        assert.isFalse(Sort.isSorted([{ value: 5 }, { value: 4 }, { value: 3 }, { value: 2 }, { value: 1 }], compare));
        assert.isFalse(Sort.isSorted([{ value: -1 }, { value: -2 }, { value: -3 }, { value: -4 }, { value: -5 }], compare));
        assert.isFalse(Sort.isSorted([{ value: -1 }, { value: -2 }, { value: -3 }, { value: 4 }, { value: 5 }], compare));
        assert.isFalse(Sort.isSorted([{ value: 0.5 }, { value: 0.4 }, { value: 0.3 }, { value: 0.2 }, { value: 0.1 }], compare));
        assert.isFalse(Sort.isSorted([{ value: -0.1 }, { value: -0.2 }, { value: -0.3 }, { value: -0.4 }, { value: -0.5 }], compare));
        assert.isFalse(Sort.isSorted([{ value: 0.1 }, { value: 0.2 }, { value: -0.3 }, { value: -0.4 }, { value: -0.5 }], compare));
        assert.isFalse(Sort.isSorted([{ value: 5.5 }, { value: 4 }, { value: 3.3 }, { value: 2 }, { value: 1.1 }], compare));
        assert.isFalse(Sort.isSorted([{ value: 1.1 }, { value: 2 }, { value: -3.3 }, { value: -4.4 }, { value: -5.5 }], compare));
        assert.isFalse(Sort.isSorted([{ value: 'e' }, { value: 'd' }, { value: 'c' }, { value: 'b' }, { value: 'a' }], compare));
        assert.isFalse(Sort.isSorted([{ value: 'ae' }, { value: 'ad' }, { value: 'ac' }, { value: 'ab' }, { value: 'aa' }], compare));
        assert.isFalse(Sort.isSorted([{ value: 'E' }, { value: 'D' }, { value: 'C' }, { value: 'B' }, { value: 'A' }], compare));
        assert.isFalse(Sort.isSorted([{ value: 'ear of corn' }, { value: 'date' }, { value: 'carrot' }, { value: 'banana' }, { value: 'apple' }], compare));
        assert.isFalse(Sort.isSorted([{ value: 'Ear Of Corn' }, { value: 'Date' }, { value: 'Carrot' }, { value: 'Banana' }, { value: 'Apple' }], compare));
    });
});
