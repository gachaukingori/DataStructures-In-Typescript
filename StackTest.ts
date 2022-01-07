import Stack from './Stack';
let stack = new Stack();
console.log("Stack before push: " + stack)

for(let i =1; i<=5; i ++){
    stack.push("number "+i);
}
console.log("stack affter pushing 5 elements: " + stack)


let topOfStack:any = stack.peek();
//console.log(stack)
console.log("Peeking the top element of the stack " + stack.peek());
console.log("stack before popping the first element  "+ stack );
console.log("popping the top element: " + stack.pop());
console.log("Stack after popping: "+ stack);