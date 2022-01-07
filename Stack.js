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
var AstractDataStructures_1 = require("./AstractDataStructures");
var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack() {
        var _this = _super.call(this) || this;
        _this.stack = new Array();
        return _this;
    }
    Stack.prototype.clear = function () {
        this.stack = [];
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length == 0;
    };
    Stack.prototype.peek = function () {
        var temp = this.stack[0];
        if (this.isEmpty()) {
            throw new Error("Empty Stack");
        }
        else {
            return temp;
        }
    };
    Stack.prototype.pop = function () {
        var tempItem = this.stack[0];
        var tempLength = this.stack.length - 1;
        // for(let i:number = 0; i < this.stack.length; i++){
        //     this.stack[i] = this.stack[i+1];
        // }       
        // console.log(tempItem)
        var tempArray = new Array(tempLength);
        for (var j = 0; j < tempArray.length; ++j) {
            tempArray[j] = this.stack[j + 1];
        }
        this.stack = tempArray;
        return tempItem;
    };
    Stack.prototype.push = function (item) {
        var tempArray = new Array(this.stack.length + 1);
        tempArray[0] = item;
        for (var i = 0; i < this.stack.length; i++) {
            tempArray[i + 1] = this.stack[i];
        }
        this.stack = tempArray;
    };
    Stack.prototype.size = function () {
        return this.stack.length + 1;
    };
    return Stack;
}(AstractDataStructures_1["default"]));
exports["default"] = Stack;
