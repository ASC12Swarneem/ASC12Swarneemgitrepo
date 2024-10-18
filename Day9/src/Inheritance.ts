// EXPLORING THE CODE BASE
/*
console.log("1  ***************************")
class Phone {
    phoneFeature : string;
    constructor(feature : string){
        console.log("Phone constructor called and feature is initialized");
        this.phoneFeature = feature;
    }
    // constructor(public feature : string){
    //     console.log("Phone constructor called", feature);
    // }
    displayDetails() : void {
        console.log("Phone feature are  " + this.phoneFeature);
    }
}

class SmartPhone extends Phone {
    constructor(public feature : string, public  cameraSpecs : string){
        // super() = base class constructor
        // super (feature) = base class constructor with parameter Phone(feature)
        super(feature);

        console.log("SmartPhone constructor completed");
    }

   displayDetails(): void {
       console.log("SmartPhone feature are  " + this.phoneFeature + " and camera specs are " + this.cameraSpecs);
   }
}
// Instantiate the Phone
// const phone = new Phone("Basic Phone with calling facilities");
// phone.displayDetails();
const phone1 = new SmartPhone("Phone with touch screen, calling, messaging, camera, music player, and internet browsing features","108 mega pixel camera!" );
phone1.displayDetails();
*/


class Phone{
    phone: string;
    constructor(phone){
        this.phone = phone;
        console.log("Base class constructor is called", phone);
    }
    
    phoneModel():void
    {
        console.log("Phone model is ",this.phone);
    }

    num: number;
    call(num):void{
        console.log("Calling ",num)
    }

    time:string;
    setAlarm(time):void{
        console.log("Setting alarm for ", time)
    }
}

class SmartPhone extends Phone{
    smartphone: string;
    constructor(smartphone: string){
        super(smartphone);
        // console.log("This is a smartphone class constructor");
    }

    capturePhoto():void{
        console.log("Capturing Photos");
    }

    shootVideo():void{
        console.log("Shooting Video");
    }
}

//Creating an object for Base class
const phone = new Phone("Nokia3310");
phone.call(122434);
phone.setAlarm("11:00AM");
phone.phoneModel();

const smartphone = new SmartPhone("S24");
//Inheriting the base class functions
smartphone.phoneModel();
smartphone.call(12332432);
smartphone.setAlarm("22:00");
smartphone.capturePhoto();
smartphone.shootVideo();
