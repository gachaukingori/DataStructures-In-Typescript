"use strict";
exports.__esModule = true;
var MySet = /** @class */ (function () {
    function MySet() {
        this.tempSet = new Set();
        this.setA = new Set();
        this.setB = new Set();
    }
    /**
     *
     * @param setA First Set
     * @param setB Second Set
     * @returns new set of element from both sets
     */
    MySet.prototype.union = function (setA, setB) {
        var tempSet = new Set();
        setA.forEach(function (value) {
            tempSet.add(value);
        });
        setB.forEach(function (value) {
            tempSet.add(value);
        });
        return tempSet;
    };
    /**
     *
     * @param setA First Set
     * @param setB Second Set
     * @returns new set with common elements from both sets
     */
    MySet.prototype.intersection = function (setA, setB) {
        var tempSet = new Set();
        setA.forEach(function (value) {
            if (setB.has(value)) {
                tempSet.add(value);
            }
        });
        return tempSet;
    };
    /**
     *
     * @param setA First Set
     * @param setB Second Set
     * @returns All elements in set A and not in set B
     */
    MySet.prototype.difference = function (setA, setB) {
        var tempSet = new Set();
        setA.forEach(function (value) {
            if (!setB.has(value)) {
                tempSet.add(value);
            }
        });
        return tempSet;
    };
    /**
     *
     * @param setA First Set
     * @param setB Second Set
     * @returns Uncommon Elements in both Sets (A - B) U ( B - A )
     */
    MySet.prototype.symmetricDifference = function (setA, setB) {
        var tempSet = new Set();
        var AminusB = this.difference(setA, setB);
        var BminusA = this.difference(setB, setA);
        return this.union(AminusB, BminusA);
    };
    return MySet;
}());
exports["default"] = MySet;
