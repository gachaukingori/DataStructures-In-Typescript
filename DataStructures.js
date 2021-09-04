"use strict";
exports.__esModule = true;
exports.DataStructures = void 0;
var DataStructures = /** @class */ (function () {
    // constructor(x :string ,y:string){
    //     this.sentence1 = x;
    //     this.sentence2 = y;
    // }
    // Implementation of multiple  constructors 
    function DataStructures() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.sentence1 = "";
        this.sentence2 = "";
        if (args.length == 2) {
            this.sentence1 = args[0]; // Type Casting 
            this.sentence2 = args[1];
        }
    }
    DataStructures.prototype.testSets = function () {
        var mySet = new Set();
        mySet.add(this.sentence1);
        mySet.add(this.sentence2);
        // console.log(mySet);
        return mySet;
    };
    return DataStructures;
}());
exports.DataStructures = DataStructures;
