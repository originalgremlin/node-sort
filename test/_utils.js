var assert = require('chai').assert,
    Sort = require('../sorts/_sort');

module.exports = {
    createIntegerArray: function (length, shuffle) {
        var a = new Array(length);
        for (var i = 0; i < length; i++)
            a[i] = i;
        return shuffle ? Sort.shuffle(a) : a;
    },

    createFloatArray: function (length, shuffle) {
        var a = new Array(length);
        for (var i = 0; i < length; i++)
            a[i] = i + 0.1;
        return shuffle ? Sort.shuffle(a) : a;
    },

    createStringArray: function (length, shuffle) {
        var a = new Array(length);
        for (var i = 0; i < length; i++)
            a[i] = 'value_' + (1000000 + i).toString();
        return shuffle ? Sort.shuffle(a) : a;
    },

    createIntegerObjectArray: function (length, shuffle) {
        var a = new Array(length);
        for (var i = 0; i < length; i++)
            a[i] = { key: 'key_' + i, value: i };
        return shuffle ? Sort.shuffle(a) : a;
    },

    createFloatObjectArray: function (length, shuffle) {
        var a = new Array(length);
        for (var i = 0; i < length; i++)
            a[i] = { key: 'key_' + i, value: i + 0.1 };
        return shuffle ? Sort.shuffle(a) : a;
    },

    createStringObjectArray: function (length, shuffle) {
        var a = new Array(length);
        for (var i = 0; i < length; i++)
            a[i] = { key: 'key_' + i, value: 'value_' + (1000000 + i).toString() };
        return shuffle ? Sort.shuffle(a) : a;
    },

    equals: function (array1, array2, compare) {
        compare = compare || Sort.compare.byValue;
        if (!(array1 instanceof Array && array2 instanceof Array))
            throw 'This method only compares arrays for equality.';
        if (array1.length != array2.length)
            return false;
        for (var i = 0, length = array1.length; i < length; i++) {
            if (compare(array1[i], array2[i]) !== 0)
                return false;
        }
        return true;
    }
};

describe('Utilities', function () {
    var utils = module.exports;

    describe('#equals', function () {
        it('compares for equality (integer)', function () {
            var compare = Sort.compare.byValue;
            assert.isTrue(utils.equals([], [], compare));
            assert.isTrue(utils.equals([0], [0], compare));
            assert.isTrue(utils.equals([1], [1], compare));
            assert.isTrue(utils.equals([1,2,3], [1,2,3], compare));
            assert.isTrue(utils.equals([3,2,1], [3,2,1], compare));
            assert.isTrue(utils.equals([-1,-2,-3], [-1,-2,-3], compare));
            assert.isTrue(utils.equals([-1,2,-3], [-1,2,-3], compare));
            assert.isFalse(utils.equals([], [0], compare));
            assert.isFalse(utils.equals([0], [1], compare));
            assert.isFalse(utils.equals([1,2,3], [1,2,3,4], compare));
            assert.isFalse(utils.equals([1,1,1], [1,1,1,1], compare));
        });

        it('compares for equality (float)', function () {
            var compare = Sort.compare.byValue;
            assert.isTrue(utils.equals([0.0], [0.0], compare));
            assert.isTrue(utils.equals([1.1], [1.1], compare));
            assert.isTrue(utils.equals([1.1,2.1,3.1], [1.1,2.1,3.1], compare));
            assert.isTrue(utils.equals([3.1,2.1,1.1], [3.1,2.1,1.1], compare));
            assert.isTrue(utils.equals([-1.1,-2.1,-3.1], [-1.1,-2.1,-3.1], compare));
            assert.isTrue(utils.equals([-1.1,2.1,-3.1], [-1.1,2.1,-3.1], compare));
            assert.isTrue(utils.equals([1.1,2.1,3], [1.1,2.1,3], compare));
            assert.isTrue(utils.equals([-1.1,2.1,-3], [-1.1,2.1,-3], compare));
            assert.isFalse(utils.equals([], [0.0], compare));
            assert.isFalse(utils.equals([0.0], [1.0], compare));
            assert.isFalse(utils.equals([1.1,2.1,3.1], [1.1,2.1,3.1,4.1], compare));
            assert.isFalse(utils.equals([1.1,1.1,1.1], [1.1,1.1,1.1,1.1], compare));
        });

        it('compares for equality (string)', function () {
            var compare = Sort.compare.byValue;
            assert.isTrue(utils.equals(['a'], ['a'], compare));
            assert.isTrue(utils.equals(['a','b','c'], ['a','b','c'], compare));
            assert.isTrue(utils.equals(['c','b','a'], ['c','b','a'], compare));
            assert.isTrue(utils.equals(['A','B','C'], ['A','B','C'], compare));
            assert.isTrue(utils.equals(['apple','banana','carrot'], ['apple','banana','carrot'], compare));
            assert.isFalse(utils.equals([], ['a'], compare));
            assert.isFalse(utils.equals(['a'], ['b'], compare));
            assert.isFalse(utils.equals(['a'], ['A'], compare));
            assert.isFalse(utils.equals(['a', 'b', 'c'], ['a', 'b', 'C'], compare));
            assert.isFalse(utils.equals(['a', 'b', 'c'], ['a', 'b', 'c', 'd'], compare));
        });

/* TODO
        it('compares for equality (integer-valued object)', function () {
            var compare = Sort.compare.byObjectValue;
        });

        it('compares for equality (float-valued object)', function () {
            var compare = Sort.compare.byObjectValue;
        });

        it('compares for equality (string-valued object)', function () {
            var compare = Sort.compare.byObjectValue;
        });
*/
    });

/* TODO
    describe('#create', function () {
        it('creates a sorted array (integer)', function () {

        });

        it('creates a sorted array (float)', function () {

        });

        it('creates a sorted array (string)', function () {

        });

        it('creates a sorted array (integer-valued object)', function () {

        });

        it('creates a sorted array (float-valued object)', function () {

        });

        it('creates a sorted array (string-valued object)', function () {

        });

        it('creates a shuffled array (integer)', function () {

        });

        it('creates a shuffled array (float)', function () {

        });

        it('creates a shuffled array (string)', function () {

        });

        it('creates a shuffled array (integer-valued object)', function () {

        });

        it('creates a shuffled array (float-valued object)', function () {

        });

        it('creates a shuffled array (string-valued object)', function () {

        });
    });
*/
});