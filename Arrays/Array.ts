

import {ArrayInterface} from "./ArrayInterface"

class MyArray<T> implements ArrayInterface<T>{


    constructor (){

    }

        

    /**
     * 
     * @param array a generic Array 
     * @returns a reversed generic array with the last item as the first item ....
     */
        public reverseArray(array:T[]){
            if(array.length == 0){
                throw new Error("Array cannot be empty");

            }
            let tempArray :T[] = new Array(array.length); // create a new array of the same size as your array eg size 5 has index 0 -4
            let j = array.length; // get the length of the array j = 5
            for( let i=0; i<array.length; i++){ // loop through original array when i =0;
                j-- // decrement j after every loop because arrays are zero index, you need to  decrease before setting  j is 4 
                tempArray[j] = array[i]; // set the element of index j to the value of index i; set index 4 to be value of index 0

            }
            return tempArray;
        }

        /**
         * 
         * @param array  an array of numbers 
         * @returns  the maximum number in the array
         */
        public getMaximum(array:number[]){
            if(array.length == 0){
                throw new Error("Array cannot be empty");
            }else if(array.length == 1){
                return array[0]; // if there is only one element then this is the maximu element
            }
            let currentMax = array[0]; // take the  first element as the maximum 
            for(let i = 1; i<array.length; i++){ // take the next element (index 1) for comparison  
                if(array[i]>currentMax){ // if the element at index 1 is greater than the first element (index 0)
                    currentMax = array[i]; // the element at index 1 becomes the maximum element
                } // if there are still elements left in the array increment the move to the next index ( i = 2) with your current maximu value
            }

            return currentMax;
        }

        /**
         * 
         * @param array an array of numbers
         * @returns the minimum number in the array
         */
        public getMinimum(array:number[]){
            if(array.length == 0){
                throw new Error("Array cannot be empty");

            }else if(array.length == 1){
                return array[0]; // if there is only one element then this is the minimum element
            }
            let currentMin = array[0]; // take the first element as the minimum element

            for(let i = 1; i<array.length; i++){ // take the next element of the other elements for comparison
                if(array[i]<currentMin){ // if the elemnt is smaller than the first element, 

                    currentMin = array[i]; // the element becomes the new minimum
                }
                // start the loop with the new current minimu and move to the next index 
            }

            return currentMin;
        }

        /**
         * 
         * @param array unsorted array
         * @returns an array sorted in ascending order
         */


        public selectionSort(array:T[]){
            if(array.length == 0){
                throw new Error("Array cannot be empty");

            }
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


        /**
         * 
         * @param array an unsorted array to be sorted
         * @returns a sorted array
         */
        public insertionSort(array:T[]){

            return array;
        }


        /**
         * Trying to use reverse array to determine if a string is a palindrome
         * @param palindrome 
         * @returns 
         */
        public  palindromeProblemReverse(palindrome:string):boolean {
            let strArray = Array.from(palindrome)
            let  length = strArray.length

            let tempArray = new Array(length);
            

            for(let i = 0; i < tempArray.length; i++){
                length--
                tempArray[i] = strArray[length]
                
            }
            console.log(strArray)
            console.log(tempArray)



            if(strArray.toString() === tempArray.toString()){
                console.log(palindrome + " is a palindrome")
                return true
            }else{
                console.log(palindrome + " is not a palindrome")
                return false;
            }       

            
            
        }

        public palindromeProblemDivideAndConquer(palindrome:string){
            
            let strArray = Array.from(palindrome)
            let  length = strArray.length
            let  firstArray = new Array();
            let  secondArray = new Array()
            if(length%2 == 0){
                let mid = length/2;

                 firstArray = strArray.slice(0,mid);
                 secondArray = strArray.slice(mid, length); 
    
            }else{
                length --;
               let mid = length/2;

                firstArray = strArray.slice(0,mid);
                secondArray = strArray.slice(mid+1,strArray.length ); 

               console.log(firstArray)
               console.log(secondArray)
            }


            if(firstArray.toString() === this.reverseArray(secondArray).toString()){
                console.log(palindrome + " is a palindrome")
                return true
            }else{
                console.log(palindrome + " is not a palindrome")
                return false;
            }      
           



        }

}


export {MyArray};
