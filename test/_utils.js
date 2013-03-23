var Sort = require('../sorts/_sort');

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
    }
};

describe('Utilities', function () {
    it('creates a sorted integer array', function () {

    });

    it('creates a shuffled integer array', function () {

    });
});