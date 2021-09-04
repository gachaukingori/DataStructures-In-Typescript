"use strict";
exports.__esModule = true;
exports.Vaccination = void 0;
var Queue_1 = require("./Queue");
var Vaccination = /** @class */ (function () {
    function Vaccination() {
        this.isRegistered = false;
        this.ticketNumber = 0;
        this.isVaccinated = false;
        this.vaccinationNumber = 0;
        this.patientQueue = new Queue_1.Queue(10);
        //this.ticketNumber = ticketNumber
        //this.isRegistered = true;
        // this.ticketNumber = ticketNumber
    }
    Vaccination.prototype.registerNewPatient = function () {
        if (this.patientQueue.isFull()) {
            throw new Error("Please Wait in line");
        }
        else {
            if (this.patientQueue.isEmpty()) {
                this.ticketNumber = 1;
            }
            else {
                this.ticketNumber = this.patientQueue.peekLast() + 1;
            }
            this.isRegistered = true;
            console.log("Successfully Registered, Your Ticket number is: " + this.ticketNumber);
            this.patientQueue.enqueue(this.ticketNumber);
            return this.ticketNumber;
        }
    };
    Vaccination.prototype.vaccinatePatient = function (ticketNumber) {
        if (this.patientQueue.peek() == ticketNumber) {
            console.log("The patient is ready for vaccination");
            this.vaccinationNumber = this.patientQueue.dequeue();
            this.isVaccinated = true;
            this.sendVaccinationNotification(ticketNumber);
            this.callNextPatient();
        }
        else {
            console.log("Ticket Number " + this.patientQueue.peek() + " is the one in line");
            this.isVaccinated = false;
        }
    };
    Vaccination.prototype.sendVaccinationNotification = function (ticketNumber) {
        console.log("Congratulations ticket number" + ticketNumber + "on your vaccination");
    };
    Vaccination.prototype.callNextPatient = function () {
        this.registerNewPatient();
        console.log("Ticket number" + this.patientQueue.peek() + " is up for vaccination");
    };
    return Vaccination;
}());
exports.Vaccination = Vaccination;
