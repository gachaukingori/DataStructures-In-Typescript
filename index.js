"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var DataStructures_1 = require("./DataStructures");
var Queue_1 = require("./Queue");
var Vaccination_1 = require("./Vaccination");
var IndexClass = /** @class */ (function (_super) {
    __extends(IndexClass, _super);
    function IndexClass(mySet) {
        var _this = _super.call(this, "This is a boy", "This is a grirl") || this;
        _this.mySet = new Set();
        _this.mySet = mySet;
        return _this;
    }
    IndexClass.mainTest = function () {
        var dataStructures = new DataStructures_1.DataStructures("This is a boy", "This  a girl");
        var mySet = dataStructures.testSets();
        // for(let i = 0; i<mySet.size; i++){
        //     console.log(mySet);
        // }
        mySet.forEach(function (values) {
            console.log(values);
        });
        //  for(let values of mySet){
        //      console.log(values);
        //  }
        return mySet;
    };
    IndexClass.testQueues = function () {
        var myQueue = new Queue_1.Queue(10);
        for (var i = 0; i < 6; i++) { // creates a queue of 6 elements
            myQueue.enqueue("Element " + i);
        }
        // console.log(myQueue);  // enqueueing
        console.log(myQueue.peek()); // peeking the first element
        console.log(myQueue.dequeue()); // removing the first element
        // peek after dequeue
        console.log(myQueue.peekLast());
    };
    IndexClass.covid19VaccinationQueue = function () {
        var vaccination = new Vaccination_1.Vaccination();
        var ticketNumber = vaccination.registerNewPatient();
        vaccination.vaccinatePatient(ticketNumber);
    };
    return IndexClass;
}(DataStructures_1.DataStructures));
// console.log(IndexClass.mainTest());
// IndexClass.testQueues();
IndexClass.covid19VaccinationQueue();
