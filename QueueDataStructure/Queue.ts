class Queue<T>{

        private queue:T[];
        private length: number;
        private maxSize:number;

      

        public constructor(maxSize:number){
            this.queue = new Array<T>();
            this.length = 0;
            if(maxSize < 0){
                this.maxSize =10;
            }else{
                this.maxSize = maxSize;
            }
        }
        public isEmpty():boolean{

            return this.length == 0;
        }
        public isFull():boolean{
            return this.length === this.maxSize;
        }

        public peek():T{
            if(this.isEmpty()){
                throw new Error("The queue is Empty");
            }else{
                return this.queue[0];
            }
        }
        public enqueue(newItem:T):void{
            if(this.isFull()){//can't add any other element
                throw new Error("The queue is full");

            }else{// increment the length and assign the new item to the last index eg
                // if length was  5 . increase length by 1 and to six and assign the new item to index 6
                this.queue[this.length++] = newItem;
            }
        }
        public dequeue():T{ // 1. make sure the queue is not empty
            // 2.read the queue at index 0;
            // 3.make the value at index 1 = queue at index 0 and so on index 2 to be index 1
            // 4.decrement the  length of the array;
            // Implementation 1
            if(this.isEmpty()){
                throw new Error("The queue is empty");
            }else{
                //implementation 2
                let temp = this.queue[0];
                // this.queue.forEach((i:T)=>{
                //    // this.queue[vaue]

                // });
                for(let i:number = 0; i<this.queue.length; i++){ // index 0 becomes the value of index 1
                    this.queue[i] = this.queue[i+1]
                }
            // decrement the length 
            this.length = this.length -1;

                return temp;
            }
            
        }
        public peekLast(): T{
            if(this.isEmpty()){
                throw new Error("The Queue is empty")
            }else{
                return this.queue[this.length -1 ];
            }

        }
    }
    export default Queue;