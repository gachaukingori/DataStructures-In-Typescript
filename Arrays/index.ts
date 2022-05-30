import {MyArray} from "./Array";


let array = new MyArray();


let names = ["X", "b", "C", "A","x","U", "B"];
console.log("Example of array before reversing \n \t " + names )
let reversedArray = array.reverseArray(names);
console.log( "\n array after reversal \n \t" +reversedArray)


let age = [43,64,38,84,27,29,42];


console.log("\n we will use this to determine the following \n 1. Maximum value \n 2. Minimum value \n  " +
"3. Sort the array using \n  \t Insertion sort \n \t Selection sort" )


// console.log(age)
// console.log(array.insertionSort(age));

let maxAge = array.getMaximum(age);

let minAge = array.getMinimum(age);

// console.log(minAge)

// let selectionSorted = array.selectionSort(names)
// console.log(selectionSorted)

// array.palindromeProblemReverse("saippuakivikauppias");

// array.palindromeProblemDivideAndConquer("saippuakivikauppias")

// let arrayObject = {
//     "Maximum value" : maxAge,
//     "Minimum Value" : minAge,
//     "insertion sort " : array.insertionSort(age),
//     "Selection sort " : array.selectionSort(age),

//     }

//     console.log(arrayObject)

console.log("\n Example of an unsorted array \n " +age )
console.log(array.mergeSort(age));



