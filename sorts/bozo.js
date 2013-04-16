var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n!',
        best: '1',
        worst: 'infinity',
        random: true,
        stable: false,
        memory: 'n',
        url: 'http://en.wikipedia.org/wiki/Bozo_sort#Related_algorithms'
    },
    compare: Sort.compare,

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        var length = array.length;
        while (!Sort.isSorted(array, compare)) {
            var i = Math.floor(Math.random() * length),
                j = Math.floor(Math.random() * length);
            Sort.swap(array, i, j);
        }
        return array;
    }
};
