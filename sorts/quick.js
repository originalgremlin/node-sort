var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n log n',
        best: 'n log n',
        worst: 'n^2',
        random: false,
        stable: true,
        memory: 'n + log(n)',
        url: 'http://en.wikipedia.org/wiki/Quicksort'
    },
    compare: Sort.compare,

    // median of 3
    // stable sort if we always choose the right-most element in case of a tie
    choosePivotIndex: function (array, compare, left, right) {
        var median = Math.floor(left + (right - left) / 2),
            l = array[left],
            m = array[median],
            r = array[right];
        if (compare(l, m) <= 0 && compare(l, r) <= 0)      // left is least
            return (compare(m, r) < 0) ? median : right;
        else if (compare(m, l) <= 0 && compare(m, r) <= 0) // median is least
            return (compare(l, r) < 0) ? left : right;
        else                                               // right is least
            return (compare(l, m) < 0) ? left : median;
    },

    partition: function (array, compare, left, right, pivotIndex) {
        var pivotValue = array[pivotIndex],
            storeIndex = left;
        // move pivot to end
        Sort.swap(array, pivotIndex, right);
        // partition all lesser values to the left and greater values to the right of the pivot
        for (var i = left; i < right; i++) {
            if (compare(array[i], pivotValue) < 0) {
                Sort.swap(array, storeIndex, i);
                storeIndex++;
            }
        }
        // move pivot to its final place
        Sort.swap(array, right, storeIndex);
        return storeIndex;
    },

    sort: function (array, compare, left, right) {
        // defaults
        compare = compare || Sort.compare.byValue;
        left = left || 0;
        right = right || array.length - 1;
        // algorithm
        if (left < right) {
            // choose any pivotIndex such that left ≤ pivotIndex ≤ right
            var pivotIndex = this.choosePivotIndex(array, compare, left, right);
            // get lists of bigger and smaller items and final position of pivot
            var newPivotIndex = this.partition(array, compare, left, right, pivotIndex);
            // To make sure at most O(log n) space is used,
            // recurse first into the smaller half of the array,
            // and use a tail call to recurse into the other.
            if ((newPivotIndex - left) < (right - newPivotIndex)) {
                this.sort(array, compare, left, newPivotIndex - 1);
                this.sort(array, compare, newPivotIndex + 1, right);
            } else {
                this.sort(array, compare, newPivotIndex + 1, right);
                this.sort(array, compare, left, newPivotIndex - 1);
            }
        }
        return array;
    }
};
