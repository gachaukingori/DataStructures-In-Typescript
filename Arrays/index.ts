import {MyArray} from "./Array";


let array = new MyArray();
let names = ["Gachau", "Victor", "Kingori"];
let reversedArray = array.reverseArray(names);
console.log(reversedArray)

let age = [43,64,38,84,27,29];
let maxAge = array.getMaximum(age);

console.log(maxAge)


let minAge = array.getMinimum(age);
console.log(minAge)

let selectionSorted = array.selectionSort(age)
console.log(selectionSorted)


