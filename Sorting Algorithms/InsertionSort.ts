class InsertionSort<T>{
    
    public constructor(){
        

    }
    public sortArray(unsortedArray: T[]):T[]{
            for(let i = 1; i<unsortedArray.length; i++){
                let currentElement :T = unsortedArray[i];
                let j = i-1;
                while(j>=0 && unsortedArray[j]>currentElement){
                    unsortedArray[j+1] = unsortedArray[j];
                    j = j-1;
                }

                unsortedArray[j+1] = currentElement
            }

        return unsortedArray ;
    }
}
const myArray:string[] = ["A","Y","C","M", "B", "X", "Q"];

let insertionSort = new InsertionSort();
console.log(insertionSort.sortArray(myArray));
