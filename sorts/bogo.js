var Sort = require('./_sort');

module.exports = {
    properties: {
        average: '(n-1)*n!',
        best: '1',
        worst: 'infinity',
        random: true,
        stable: false,
        memory: 'n',
        url: 'http://en.wikipedia.org/wiki/Bogosort'
    },
    compare: Sort.compare,

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        while (!Sort.isSorted(array, compare))
            Sort.shuffle(array);
        return array;
    }
};
