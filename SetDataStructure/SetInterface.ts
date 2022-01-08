/**
 * Set operations interface 
 */
interface SetInterface <T>{
    union: (A:Set<T>, B: Set<T>)=>Set<T>;
    intersection:(A:Set<T>, B: Set<T>)=>Set<T>;
    difference:(A:Set<T>, B: Set<T>)=>Set<T>;
    symmetricDifference:(A:Set<T>, B: Set<T>)=>Set<T>;
}
export default SetInterface
