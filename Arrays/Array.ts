

import {ArrayInterface} from "./ArrayInterface"

class MyArray<T> implements ArrayInterface<T>{


    constructor (){

    }

        

    /**
     * 
     * @param array a generic Array 
     * @returns a reversed generic array with the last item as the first item ....
     */
        public reverseArray(array:T[]):T[]{
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
        public getMaximum(array:number[]):number{
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
        public getMinimum(array:number[]):number{
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


        public selectionSort(array:T[]):T[]{
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
                if(currentIndex !=i){ // swapping the minimum to if it was changed  ie. after 5 taking the place of value 2 we need 2 to take the position of element 5
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
        public insertionSort(array:T[]) :T[]{

            // array example of 7, 3,1,2
            

            for(let i = 0; i<array.length; i++){
                let currentMinimum = array[i]; // when i = 0, 7 is the minimum, 1 =1 currentMin = 3, when i = 2 currentMin = 1, i = 3 currentMin  (array[3]) =2
                let k = i-1; // k = -1, skip the while loop, k =0 now, k = 1 (2-1), i=3 k =2 
                while (k>=0 && array[k]>currentMinimum){// i =1 the value at index 0 which is 7 is greater than 3, i =2 k =1 and  7 > 1, k >= 0 true and array[2] which is 7 is greater than 2 , i =3 and k = 1 arra[k] is 3 and current Minimum = 2 we get inside the loop, 
                  array[k+1] = array[k] //  we set the value at index k+1 (index 1)   to 7, set the value of index k+1 (index 2) = to value of k (index 1) index[2] = 7, when k is 2 make the value of array[k+1] = to be 7 7 is the value of index 3 array is 1,3,2,7, when i=3 and  k =1 , set the value of index k+1 to be the value of k that is index 2 (3) value becomes the value of index 3
                    k-- // decrease the value of k // k is now less than 0,  k = 0 during the second loop 3 currently the value of index 0 and its greater than 1, so 3 becomes the value of index 1 and 1 becomes the value of index 0 k-- becomes -1 exit the loop with k as -1 and currentMinimum = 1 which is array[i], decrease  k to 1, decrease k to 0. value of index 0 is 1 and is less than 2 so no need to loop
                }
             array[k+1] = currentMinimum // set the value at index (k+1) == 1 to be the current minimum, k is -1 so k+1 = i , exited the while loop when k was 0 so k+1 = 1 the value on index 1 is 2, 
             //7 remains to be the current minimum(i=0), 3 becomes the current minimum(i=1),
             // increase i by 1 to 1
                
            }

            return array;
        }


        public mergeSort(array:T[]):T[]{
            if(array.length>1){
                let firstHalf :T[]
                let secondHalf :T[]

                let firstHalfLength = Math.floor(array.length/2)
                let secondHalfLength = array.length - firstHalfLength
                firstHalf = array.slice(0, firstHalfLength);
                secondHalf = array.slice(firstHalfLength, array.length);

                // console.log(firstHalf +" Second half " +secondHalf )

                this.mergeSort(firstHalf)
                this.mergeSort(secondHalf)
                this.merge(firstHalf, secondHalf, array);



            }



            return array;
        }


        public merge(array1: T[], array2:T[], temp:T[] ){
            let current1 = 0
            let current2 = 0
            let currentTemp = 0

            while(current1<array1.length && current2<array2.length){
                if(array1[current1]<array2[current2]){
                    temp[currentTemp++] = array1[current1++];
                }else{
                    temp[currentTemp++] = array2[current2++];
                }
            }
            while(current1<array1.length){
                temp[currentTemp++] = array1[current1++];
            }
            while(current2<array2.length){
                temp[currentTemp++] = array2[current2++];
            }
            
    
        }
        

        /**
         * Trying to use reverse array to determine if a string is a palindrome
         * @param palindrome 
         * @returns true if the string is a palindrome
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

        /**
         * 
         * @param palindrome string to be determined if its a palindrome
         * 
         * @returns true us the string is palindrome false if it is not
         */

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
