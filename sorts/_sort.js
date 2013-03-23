module.exports = {
    comparators: {
        numeric: function (a, b) {
            return a - b;
        },

        string: function (a, b) {
            return (a > b ? 1 : a < b ? -1 : 0);
        },

        generic: function (a, b) {
            return (a > b ? 1 : a < b ? -1 : 0);
        },

        numericValue: function (a, b) {
            return a.value - b.value;
        },

        stringValue: function (a, b) {
            return (a.value > b.value ? 1 : a.value < b.value ? -1 : 0);
        },

        genericValue: function (a, b) {
            return (a.value > b.value ? 1 : a.value < b.value ? -1 : 0);
        }
    },

    swap: function (array, i, j) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
};
