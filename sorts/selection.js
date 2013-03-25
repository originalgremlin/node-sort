var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n^2',
        best: 'n^2',
        worst: 'n^2',
        random: false,
        stable: false,
        memory: 'n',
        url: 'http://en.wikipedia.org/wiki/Selection_sort'
    },
    compare: Sort.compare,

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        for (var i = 0, length = array.length; i < length - 1; i++) {
            var min = i;
            for (var j = i + 1; j < length; j++)
                if (compare(array[j], array[min]) < 0)
                    min = j;
            if (min !== i)
                Sort.swap(array, i, min);
        }
        return array;
    }
};
