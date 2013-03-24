var Sort = require('./_sort');

module.exports = {
    properties: {
        average: '',
        best: '',
        worst: '',
        random: false, //?
        stable: true, //?
        url: ''
    },
    compare: Sort.compare,

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        return array;
    }
};
