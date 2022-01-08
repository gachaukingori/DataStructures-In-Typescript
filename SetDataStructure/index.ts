import MySet from './Set';
class TestSet<T>{
    public setA: Set<string>;
    public setB: Set<string>;
    public mySet = new MySet()
    
    constructor() {
        this.setA = new Set<string>()
        this.setB = new Set<string>()
      this.mySet = new MySet();
        let fname = "dhemswdjcbesjd";
        let lname = "shdsdkjwdhlascbs";
        /**
         * generate of characters from the strings
         */
        for(let i = 0; i <fname.length; i++){
            this.setA.add(fname.charAt(i));
        }
        
        for(let i = 0; i <lname.length; i++){
            this.setB.add(lname.charAt(i));
        }
    }

    
    public testSetUnion():void{      
        
        let unionSet = this.mySet.union(this.setA,this.setB);
        console.log("A UNION B ");    
        console.log( unionSet);        
    }
    public testIntersection():void{
           
        let intersection = this.mySet.intersection(this.setA,this.setB);
        console.log("A INTERSECTION B " );   
        console.log( intersection);     
    }
    public testDifference():void{
           
        let difference = this.mySet.difference(this.setA,this.setB);
        console.log("A MINUS B " );   
        console.log( difference);     
    }
    public testsymmetricDifference():void{
        let symmetricDifference = this.mySet.symmetricDifference(this.setA,this.setB);
        console.log("A - B union B - A ")
        console.log(symmetricDifference);  
    }
}
let test = new TestSet();
test.testSetUnion();
test.testIntersection();
test.testDifference();
test.testsymmetricDifference();

