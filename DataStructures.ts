class DataStructures{
        private sentence1:string = "";
        private sentence2: string = "";
    // constructor(x :string ,y:string){
    //     this.sentence1 = x;
    //     this.sentence2 = y;

    // }
     

    // Implementation of multiple  constructors 
    constructor(... args:any[]){

        if(args.length == 2){
                this.sentence1 = args[0]as string; // Type Casting 
                this.sentence2 = args[1] as string;
        }
    }
   

    public testSets():Set<string>{
        let mySet = new Set<string>();
        mySet.add(this.sentence1);
        mySet.add(this.sentence2);

       // console.log(mySet);
return mySet;
    }
 

}
export {DataStructures};