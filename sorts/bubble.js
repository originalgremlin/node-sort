var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n^2',
        best: 'n',
        worst: 'n^2',
        random: false,
        stable: true,
        url: 'http://en.wikipedia.org/wiki/Bubble_sort'
    },
    compare: Sort.compare,

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        var end = array.length;
        while (end > 0) {
            var lastSwapped = 0;
            for (var i = 1; i < end; i++) {
                if (compare(array[i - 1], array[i]) > 0) {
                    Sort.swap(array, i - 1, i);
                    lastSwapped = i;
                }
            }
            end = lastSwapped;
        }
        return array;
    }
};
