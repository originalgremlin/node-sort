var Sort = require('./_sort');

module.exports = {
    properties: {
        average: 'n',
        best: 'n',
        worst: 'n',
        random: false,
        stable: false,
        memory: 'n',
        url: 'http://en.wikipedia.org/wiki/Quicksort'
    },
    compare: Sort.compare,
/*
    partition: function (array, pivot, compare) {
        compare = compare || Sort.compare.byValue;
        var val = array[pivot];
        Sort.swap(array, 0, pivot);
        for (var i = 0, length = array.length; i < length; i++) {
            if (compare(array, 0))
        }
        return index;
    },
*/

    sort: function (array, compare) {
        compare = compare || Sort.compare.byValue;
        return array;
    }
};


// left is the index of the leftmost element of the subarray
// right is the index of the rightmost element of the subarray (inclusive)
//   number of elements in subarray = right-left+1
function partition(array, left, right, pivotIndex)
   pivotValue := array[pivotIndex]
   swap array[pivotIndex] and array[right]  // Move pivot to end
   storeIndex := left
   for i from left to right - 1  // left ≤ i < right
       if array[i] < pivotValue
           swap array[i] and array[storeIndex]
           storeIndex := storeIndex + 1
   swap array[storeIndex] and array[right]  // Move pivot to its final place
   return storeIndex




   function quicksort(array, left, right)

       // If the list has 2 or more items
       if left < right

           // See "Choice of pivot" section below for possible choices
           choose any pivotIndex such that left ≤ pivotIndex ≤ right

           // Get lists of bigger and smaller items and final position of pivot
           pivotNewIndex := partition(array, left, right, pivotIndex)

           // Recursively sort elements smaller than the pivot
           quicksort(array, left, pivotNewIndex - 1)

           // Recursively sort elements at least as big as the pivot
           quicksort(array, pivotNewIndex + 1, right)