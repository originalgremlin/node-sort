var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n^1.25',
        best: 'n',
        worst: 'n^2',
        random: false,
        stable: false,
        memory: 'n',
        url: 'http://en.wikipedia.org/wiki/Shellsort'
    },
    compare: Sort.compare,

    // Knuth sequence ((3^k - 1) / 2) by default
    gaps: [29524, 9841, 3280, 1093, 364, 121, 40, 13, 4, 1],

    sort: function (array, compare, gaps) {
        compare = compare || Sort.compare.byValue;
        gaps = gaps || this.gaps;
        gaps.forEach(function (gap) {
            for (var i = gap, length = array.length; i < length; i++) {
                var j, temp = array[i];
                for (j = i; j >= gap && compare(array[j - gap], temp) > 0; j -= gap)
                    array[j] = array[j - gap];
                array[j] = temp;
            }
        });
        return array;
    }
};
