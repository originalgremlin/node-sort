var assert = require('chai').assert,
    utils = require('./_utils'),
    Sort = require('../sorts/_sort');

describe('compare function', function () {
    describe('#byValue', function () {
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
});
