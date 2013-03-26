var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n^2 / increments',
        best: 'n',
        worst: 'n^2',
        random: false,
        stable: false,
        memory: 'n',
        url: 'http://en.wikipedia.org/wiki/Comb_sort'
    },
    compare: Sort.compare,
    shrinkFactor: 1.3,

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        var length = array.length,
            gap = length,
            swapped = false;
        while (gap > 1 || swapped) {
            gap = Math.max(1, Math.floor(gap / this.shrinkFactor)),
            swapped = false;
            for (var i = gap; i < length; i++) {
                if (compare(array[i - gap], array[i]) > 0) {
                    Sort.swap(array, i - gap, i);
                    swapped = true;
                }
            }
        }
        return array;
    }
};
