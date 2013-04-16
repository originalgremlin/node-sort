var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n ^ (log 3 / log 1.5)',
        best: '?',
        worst: '?',
        random: true,
        stable: false,
        memory: 'n',
        url: 'http://en.wikipedia.org/wiki/Stooge_sort'
    },
    compare: Sort.compare,

    sort: function (array, compare, left, right) {
        // ignore empty arrays
        var length = array.length;
        if (!length)
            return array;
        // defaults
        compare = compare || Sort.compare.byValue;
        left = left || 0;
        right = right || length - 1;
        // counts
        var numElements = right - left + 1,
            third = Math.floor(numElements / 3);
        // swap left with right if inverted
        if (compare(array[left], array[right]) > 0)
            Sort.swap(array, left, right);
        // bop left, right, and left again. woo! woo! woo!
        if (numElements >= 3) {
            this.sort(array, compare, left, right - third);
            this.sort(array, compare, left + third, right);
            this.sort(array, compare, left, right - third);
        }
        return array;
    }
};
