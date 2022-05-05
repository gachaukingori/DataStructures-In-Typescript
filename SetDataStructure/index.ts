import MySet from './Set';
class TestSet<T>{
    public setA: Set<number>;
    public setB: Set<number>;
    public mySet = new MySet()
    
    constructor() {
        this.setA = new Set<number>()
        this.setB = new Set<number>()
    //   this.mySet = new MySet();
    //     let consonants = "BCDFGHJKLMNPQRSTVWXYZ";
    //     let vowels = "AEIOU";
    //     /**
    //      * generate of characters from the strings
    //      */
    //     for(let i = 0; i <consonants.length; i++){
    //         this.setA.add(consonants.charAt(i));
    //     }
        
    //     for(let i = 0; i <vowels.length; i++){
    //         this.setB.add(vowels.charAt(i));
// }

        this.setA.add(3)
        this.setA.add(5)
        this.setA.add(6)
        this.setA.add(8)
        this.setA.add(0)
        this.setA.add(11)
        this.setA.add(13)
        this.setA.add(23)
        this.setA.add(28)
        this.setA.add(18)

        this.setB.add(4)
        this.setB.add(7)
        this.setB.add(1)
        this.setB.add(2)
        this.setB.add(13)
        this.setB.add(12)
        this.setB.add(17)
        this.setB.add(21)
        this.setB.add(15)
        this.setB.add(18)

        console.log("SET A IS: ")
        console.log(this.setA)
        console.log("SET B IS: ")
        console.log(this.setB)


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

