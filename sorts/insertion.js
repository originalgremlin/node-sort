var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n^2',
        best: 'n',
        worst: 'n^2',
        random: false,
        stable: true,
        url: 'http://en.wikipedia.org/wiki/Insertion_sort'
    },
    compare: Sort.compare,

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        for (var i = 1, length = array.length; i < length; i++) {
            var value = array[i],
                hole = i;
            while (hole > 0 && compare(value, array[hole - 1]) < 0)
                array[hole] = array[--hole];
            array[hole] = value;
        }
        return array;
    }
};
