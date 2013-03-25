var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n',
        best: 'n',
        worst: 'n',
        random: false,
        stable: false,
        memory: 'n',
        url: ''
    },
    compare: Sort.compare,

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        return array;
    }
};
