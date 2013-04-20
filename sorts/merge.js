var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n log n',
        best: 'n',
        worst: 'n log n',
        random: false,
        stable: true,
        memory: 'n',  // in-place
        url: 'http://en.wikipedia.org/wiki/Merge_sort'
    },
    compare: Sort.compare,

    sort: function (array, compare, left, right) {
        compare = compare || Sort.compare.byValue;
        left = left === undefined ? 0 : left;
        right = right === undefined ? array.length - 1 : right;
        // consider single-element arrays to be sorted
        if (right - left < 1)
            return array;
        // otherwise sort the left and right halves recursively
        var middle = Math.floor(left + (right - left) / 2);
        this.sort(array, compare, left, middle);
        this.sort(array, compare, middle + 1, right);
        // and merge the sorted halves back together
        this.merge(array, compare, left, middle, middle + 1, right);
        return array;
    },

    merge: function (array, compare, leftStart, leftEnd, rightStart, rightEnd) {
        // in-place merge
        while (leftStart <= leftEnd && rightStart <= rightEnd) {
            if (compare(array[leftStart], array[rightStart]) <= 0) {
                leftStart++;
            } else {
            }
        }
    }
};
