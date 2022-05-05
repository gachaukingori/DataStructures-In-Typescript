interface StackInterface <T> {
     peek:()=>void
     
     pop:()=>T;
     push:(item :T)=>void
     clear:()=>void;
     
}
export default StackInterface;