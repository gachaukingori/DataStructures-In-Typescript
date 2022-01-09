import MySet from './Set';
class TestSet<T>{
    public setA: Set<string>;
    public setB: Set<string>;
    public mySet = new MySet()
    
    constructor() {
        this.setA = new Set<string>()
        this.setB = new Set<string>()
      this.mySet = new MySet();
        let consonants = "BCDFGHJKLMNPQRSTVWXYZ";
        let vowels = "AEIOU";
        /**
         * generate of characters from the strings
         */
        for(let i = 0; i <consonants.length; i++){
            this.setA.add(consonants.charAt(i));
        }
        
        for(let i = 0; i <vowels.length; i++){
            this.setB.add(vowels.charAt(i));
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
test.testSetUnion(); // prints the 26 alphabets consonants and the vowels
test.testIntersection(); // prints an empty set.  there are no common elements in the vowel and consonants
test.testDifference(); // A-B prints the consonants while B - A Prints only the vowels
test.testsymmetricDifference(); // prints the alphabet set. all elements are uncommon in both sets 

