import e from 'express';
import SetInterface from './SetInterface'
class MySet<T> implements SetInterface<T>{
    private setA: Set<T>;
    private setB: Set<T>;
    private tempSet = new Set<T>()

    constructor() {
        this.setA = new Set<T>();
        this.setB = new Set<T>();
    }

    /**
     * 
     * @param setA First Set
     * @param setB Second Set
     * @returns new set of element from both sets
     */
    public union(setA: Set<T>, setB: Set<T>): Set<T> {
        let tempSet = new Set<T>()
        setA.forEach((value: T) => {
            tempSet.add(value);
        })
        setB.forEach((value: T) => {
            tempSet.add(value)
        })

        return tempSet;
    }
    /**
     * 
     * @param setA First Set
     * @param setB Second Set
     * @returns new set with common elements from both sets
     */
    public intersection(setA: Set<T>, setB: Set<T>): Set<T> { 
        let tempSet = new Set<T>()
        setA.forEach((value:T)=>{
            
            if(setB.has(value)){
               
                tempSet.add(value)
               
            }
        })
        setB.forEach((element)=>{
            if(setA.has(element)){
                tempSet.add(element)
            }
        })
        return tempSet;
    }
    /**
     * 
     * @param setA First Set
     * @param setB Second Set
     * @returns All elements in set A and not in set B
     */
    public difference(setA: Set<T>, setB: Set<T>): Set<T> {
        let tempSet = new Set<T>()
        setA.forEach((value)=>{
            if(!setB.has(value)){
            tempSet.add(value)
            }

        })
        return tempSet;
    }
    /**
     * 
     * @param setA First Set
     * @param setB Second Set
     * @returns Uncommon Elements in both Sets (A - B) U ( B - A )
     */
    public symmetricDifference(setA: Set<T>, setB: Set<T>): Set<T> { // A - B Union B-A
        let tempSet = new Set<T>()
        let AminusB = this.difference(setA, setB);
        let BminusA = this.difference(setB, setA);
        
        return this.union(AminusB,BminusA);
    }  


}
export default MySet;