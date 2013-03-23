var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n^2',
        best: 'n',
        worst: 'n^2',
        random: false,
        stable: true
    },
    comparators: Sort.comparators,

    // http://en.wikipedia.org/wiki/Bubble_sort
    sort: function (array, comparator) {
        comparator = comparator || Sort.comparators.generic;

        var end = array.length;
        while (end > 0) {
            var lastSwapped = 0;
            for (var i = 1; i < end; i++) {
                if (comparator(array[i - 1], array[i]) > 0) {
                    Sort.swap(array, i - 1, i);
                    lastSwapped = i;
                }
            }
            end = lastSwapped;
        }
    }
};
