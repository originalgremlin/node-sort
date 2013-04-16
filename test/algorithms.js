var assert = require('chai').assert,
    utils = require('./_utils'),
    Sort = require('../sorts/_sort');

var algorithms = [
    ['Bingo Sort', require('../sorts/bingo')],
//    ['Bogo Sort', require('../sorts/bogo')], // WARNING: this will take a loooong time
//    ['Bozo Sort', require('../sorts/bozo')], // WARNING: this will take a loooong time
    ['Bubble Sort', require('../sorts/bubble')],
    ['Comb Sort', require('../sorts/comb')],
    ['Insertion Sort', require('../sorts/insertion')],
//    ['Quick Sort', require('../sorts/quick')],
    ['Selection Sort', require('../sorts/selection')],
    ['Shell Sort', require('../sorts/shell')]
//    ['Stooge Sort', require('../sorts/stooge')] // WARNING: this will take a loooong time
];
algorithms.forEach(function (algorithm) {
    var algo = algorithm[0],
        klass = algorithm[1];

    describe(algo, function () {
        describe('properties object', function () {
            it('exists', function () {
                assert.property(klass, 'properties');
                assert.isObject(klass.properties);
            });

            it('has average', function () {
                assert.deepProperty(klass, 'properties.average');
                assert.isString(klass.properties.average);
            });

            it('has best', function () {
                assert.deepProperty(klass, 'properties.best');
                assert.isString(klass.properties.best);
            });

            it('has worst', function () {
                assert.deepProperty(klass, 'properties.worst');
                assert.isString(klass.properties.worst);
            });

            it('has random', function () {
                assert.deepProperty(klass, 'properties.random');
                assert.isBoolean(klass.properties.random);
            });

            it('has stable', function () {
                assert.deepProperty(klass, 'properties.stable');
                assert.isBoolean(klass.properties.stable);
            });

            it('has memory', function () {
                assert.deepProperty(klass, 'properties.memory');
                assert.isString(klass.properties.memory);
            });

            it('has url', function () {
                assert.deepProperty(klass, 'properties.url');
                assert.isString(klass.properties.url);
            });
        });

        describe('#sort', function () {
            var dataTypes = [
                ['integers', utils.createIntegerArray, Sort.compare.byValue],
                ['floats', utils.createFloatArray, Sort.compare.byValue],
                ['strings', utils.createStringArray, Sort.compare.byValue],
                ['integer-valued objects', utils.createIntegerObjectArray, Sort.compare.byObjectValue],
                ['float-valued objects', utils.createFloatObjectArray, Sort.compare.byObjectValue],
                ['string-valued objects', utils.createStringObjectArray, Sort.compare.byObjectValue]
            ];

            it('should return an array', function () {
                var a = klass.sort([1, 3, 5, 2, 4], Sort.compare.byValue);
                assert.isArray(a);
            });

            dataTypes.forEach(function (dataType) {
                var name = dataType[0],
                    generate = dataType[1],
                    compare = dataType[2];

                it('correctly sorts ordered ' + name, function () {
                    [0, 1, 2, 10, 100, 1000].forEach(function (length) {
                        var arr = generate(length, false);
                        klass.sort(arr, compare);
                        assert(Sort.isSorted(arr, compare), JSON.stringify(arr));
                    });
                });

                it('correctly sorts reverse-ordered ' + name, function () {
                    [0, 1, 2, 10, 100, 1000].forEach(function (length) {
                        var arr = generate(length, false).reverse();
                        klass.sort(arr, compare);
                        assert(Sort.isSorted(arr, compare), JSON.stringify(arr));
                    });
                });

                it('correctly sorts shuffled ' + name, function () {
                    [0, 1, 2, 10, 100, 1000].forEach(function (length) {
                        var arr = generate(length, true);
                        klass.sort(arr, compare);
                        assert(Sort.isSorted(arr, compare), JSON.stringify(arr));
                    });
                });
            });
        });
    });
});
