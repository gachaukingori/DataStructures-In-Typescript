import {DataStructures}   from "./DataStructures";
import {Queue}   from "./Queue";
import {Vaccination} from "./Vaccination";

class IndexClass extends DataStructures{
    private mySet = new  Set<string>();
   constructor(mySet:Set<string>){
       super("This is a boy","This is a grirl");
       this.mySet = mySet;
   }
    public static mainTest():Set<string>{
        
        let dataStructures = new DataStructures("This is a boy", "This  a girl");
        let mySet = dataStructures.testSets();
        // for(let i = 0; i<mySet.size; i++){
        //     console.log(mySet);
        // }
        mySet.forEach((values:string)=>{
            console.log(values);

        });
        //  for(let values of mySet){
        //      console.log(values);
        //  }

        return mySet;
    }
    public static testQueues(){
        let myQueue = new Queue<string>(10);
        for(let i= 0; i<6; i++){ // creates a queue of 6 elements
            myQueue.enqueue("Element "+i);
        }


       // console.log(myQueue);  // enqueueing
         console.log(myQueue.peek());  // peeking the first element
         console.log(myQueue.dequeue());// removing the first element
         // peek after dequeue
         console.log(myQueue.peekLast());

  


    }

    public static covid19VaccinationQueue():void{
        let vaccination = new Vaccination();
        let ticketNumber = vaccination.registerNewPatient();

        vaccination.vaccinatePatient(ticketNumber); 
        


    }
}
// console.log(IndexClass.mainTest());
// IndexClass.testQueues();
IndexClass.covid19VaccinationQueue();

