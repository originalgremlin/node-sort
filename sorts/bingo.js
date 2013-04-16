var Sort = require('./_sort');

module.exports = {
    properties: {
        // n is number of items, m is number of unique values
        average: 'nm',
        best: 'n + m^2',
        worst: 'nm',
        random: false,
        stable: false,
        memory: 'n',
        url: 'http://en.wikipedia.org/wiki/Selection_sort#Variants'
    },
    compare: Sort.compare,

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        // the first iteration is similar to the subsequent ones, but without swaps
        var max = array.length - 1,
            value,
            nextValue = array[max];
        // find maximum value
        for (var i = max - 1; i >= 0; i--)
            if (compare(array[i], nextValue) > 0)
                nextValue = array[i];
        while (max > 0 && compare(array[max], nextValue) === 0)
            max--;
        // find penultimate values and swap them into position at the end of the array
        while (max > 0) {
            value = nextValue;
            nextValue = array[max];
            for (var j = max - 1; j >= 0; j--) {
                if (array[j] === value) {
                    Sort.swap(array, j, max);
                    max--;
                } else if (compare(array[j], nextValue) > 0) {
                    nextValue = array[j];
                }
            }
            while (max > 0 && compare(array[max], nextValue) === 0)
                max--;
        }
        return array;
    }
};
