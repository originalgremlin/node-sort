module.exports = {
    compare: {
        byValue: function (a, b) {
            return (a > b ? 1 : a < b ? -1 : 0);
        },

        byObjectValue: function (a, b) {
            return (a.value > b.value ? 1 : a.value < b.value ? -1 : 0);
        }
    },

    swap: function (array, i, j) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
        return array;
    },

    // http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    shuffle: function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor((i + 1) * Math.random());
            this.swap(array, i, j);
        }
        return array;
    },

    isSorted: function (array, comparator) {
        comparator = comparator || this.compare.byValue;
        for (var i = 1, length = array.length; i < length; i++)
            if (comparator(array[i - 1], array[i]) > 0)
                return false;
        return true;
    }
};
