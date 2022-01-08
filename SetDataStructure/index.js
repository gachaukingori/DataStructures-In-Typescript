"use strict";
exports.__esModule = true;
var Set_1 = require("./Set");
var TestSet = /** @class */ (function () {
    function TestSet() {
        this.mySet = new Set_1["default"]();
        this.setA = new Set();
        this.setB = new Set();
        this.mySet = new Set_1["default"]();
        var fname = "dhemswdjcbesjd";
        var lname = "shdsdkjwdhlascbs";
        /**
         * generate of characters from the strings
         */
        for (var i = 0; i < fname.length; i++) {
            this.setA.add(fname.charAt(i));
        }
        for (var i = 0; i < lname.length; i++) {
            this.setB.add(lname.charAt(i));
        }
    }
    TestSet.prototype.testSetUnion = function () {
        var unionSet = this.mySet.union(this.setA, this.setB);
        console.log("A UNION B ");
        console.log(unionSet);
    };
    TestSet.prototype.testIntersection = function () {
        var intersection = this.mySet.intersection(this.setA, this.setB);
        console.log("A INTERSECTION B ");
        console.log(intersection);
    };
    TestSet.prototype.testDifference = function () {
        var difference = this.mySet.difference(this.setA, this.setB);
        console.log("A MINUS B ");
        console.log(difference);
    };
    TestSet.prototype.testsymmetricDifference = function () {
        var symmetricDifference = this.mySet.symmetricDifference(this.setA, this.setB);
        console.log("A - B union B - A ");
        console.log(symmetricDifference);
    };
    return TestSet;
}());
var test = new TestSet();
test.testSetUnion();
test.testIntersection();
test.testDifference();
test.testsymmetricDifference();
