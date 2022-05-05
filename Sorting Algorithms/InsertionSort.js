var InsertionSort = /** @class */ (function () {
    function InsertionSort() {
    }
    InsertionSort.prototype.sortArray = function (unsortedArray) {
        for (var i = 1; i < unsortedArray.length; i++) {
            var currentElement = unsortedArray[i];
            var j = i - 1;
            while (j >= 0 && unsortedArray[j] > currentElement) {
                unsortedArray[j + 1] = unsortedArray[j];
                j = j - 1;
            }
            unsortedArray[j + 1] = currentElement;
        }
        return unsortedArray;
    };
    return InsertionSort;
}());
var myArray = ["A", "Y", "C", "M", "B", "X", "Q"];
var insertionSort = new InsertionSort();
console.log(insertionSort.sortArray(myArray));
