import{Queue} from './Queue';
class Vaccination {
    private isRegistered : boolean = false;
    private ticketNumber: number = 0;
    private patientQueue : Queue <number>;
    private isVaccinated : boolean = false;
    private vaccinationNumber: number =0;


    public constructor(){

        this.patientQueue = new Queue<number>(10);
        
            //this.ticketNumber = ticketNumber
    
            //this.isRegistered = true;
           // this.ticketNumber = ticketNumber
        


    }
    public registerNewPatient() : number{
        if(this.patientQueue.isFull()){
            throw new Error("Please Wait in line")
        } else {
            if(this.patientQueue.isEmpty()){
                this.ticketNumber = 1;
            }else{
                this.ticketNumber = this.patientQueue.peekLast()+1;
            }
            this.isRegistered = true; 
           
            
            console.log("Successfully Registered, Your Ticket number is: "+this.ticketNumber);

            this.patientQueue.enqueue(this.ticketNumber);

            return this.ticketNumber;
            
        }
        
    }


 public vaccinatePatient(ticketNumber:number){
     if(this.patientQueue.peek() == ticketNumber){
         console.log("The patient is ready for vaccination")
         this.vaccinationNumber =  this.patientQueue.dequeue();
        this.isVaccinated = true;

       this.sendVaccinationNotification(ticketNumber);
       this.callNextPatient();


     }else{
        console.log("Ticket Number "+this.patientQueue.peek() +" is the one in line");
        this.isVaccinated = false;
     }


 }
     sendVaccinationNotification(ticketNumber:number){
        console.log("Congratulations ticket number"+ ticketNumber + "on your vaccination");

     }
     callNextPatient(){
        this.registerNewPatient();
         console.log("Ticket number"+ this.patientQueue.peek() + " is up for vaccination")
     }



}
export {Vaccination};