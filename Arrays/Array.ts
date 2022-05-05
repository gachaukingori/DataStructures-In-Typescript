

import {ArrayInterface} from "./ArrayInterface"

class MyArray<T> implements ArrayInterface<T>{


    constructor (){

    }

        public reverseArray(array:T[]){
            let tempArray :T[] = new Array(array.length);
            let j = array.length;
            for( let i=0; i<array.length; i++){
                j--
                tempArray[j] = array[i];

            }
            return tempArray;
        }
        public getMaximum(array:number[]){
            let currentMax = array[0];
            for(let i = 1; i<array.length; i++){
                if(array[i]>currentMax){
                    currentMax = array[i];
                }
            }

            return currentMax;
        }
        public getMinimum(array:number[]){
            let currentMin = array[0];
            for(let i = 0; i<array.length; i++){
                if(array[i]<currentMin){
                    currentMin = array[i];
                }
            }

            return currentMin;
        }

        public selectionSort(array:T[]){
            for(let i = 0; i<array.length; i++){
                // array example [5,2,4]

                
                let currentMin = array[i]; // pick the current element as the minimum element 5
                let currentIndex = i; // pick the current index of the element = 0
                // let j = i+1;
                for(let j = i+1; j<array.length; j++){ // check the next element in the array 0+1= 1 ( 2 is the value at index 1)

                    if(currentMin>array[j]){ // 5>2
                        currentMin = array[j]; // swap 5 to the next index ie element 5 becomes the value of index 1

                        currentIndex = j; // in the next loop i+1 will be the current minimum index
                    }
                    
                    
                }
                if(currentIndex !=i){ // swapping the minimum to if it was changed in line 52 ie. after 5 taking the place of value 2 we need 2 to take the position of element 5
                    array[currentIndex] = array[i]; // since j (1) is the current index now, we take the value of index 1 (2) and assign it to index i=0 (5)

                    array[i] = currentMin; // the 2 now becomes the value of element at index 0; 
                } 
                // the end of the first loop; 2,5,4 and i = 1;
               
                

                
            }

            return array;
        }

        public insertionSort(array:T[]){

            return array;
        }

}


export {MyArray};
