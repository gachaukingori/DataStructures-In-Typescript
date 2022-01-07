import ADTClass from './AstractDataStructures'
import StackInterface from './StackInterface'

class Stack<T> extends ADTClass<T> implements StackInterface <T>{
    public stack:T[];
    public constructor(){
        super();
        this.stack = new Array<T>()
    }

    public clear():void{
        this.stack=[];
    }

    public isEmpty():boolean{
        
        return this.stack.length==0;
    }

    public peek(): T{  
        let temp:T = this.stack[0]
         if(this.isEmpty()){
                    throw new Error("Empty Stack")
         }else{
            return temp;
        }
        
    }
    public pop():T{ 
        let tempItem = this.stack[0];
        let tempLength = this.stack.length  - 1;
     

        let tempArray = new Array(tempLength);
        for(let j = 0; j<tempArray.length; ++j){
            tempArray[j] = this.stack[j+1]
        }
        this.stack = tempArray;

        return tempItem;
    }

    public push(item:T):void{
        let tempArray  = new Array(this.stack.length + 1);
        tempArray[0] = item;
        for(let i = 0; i<this.stack.length; i++){
            tempArray[i+1] = this.stack[i];
        }
        this.stack = tempArray;
        
    }
    public size():number{
        return this.stack.length+1;
    }
}
export default Stack;