/*
console.log("Hel;o world, I am learning typescript");

var message = "All JS files are TS by default";
 
console.log(message);

//2. Static Typing
function add(a: number, b: number): number{
    return a+b;
}
const addresult = console.log(add(2,2));


function sub(a: number, b: number): number{
    return a-b;
}
const subresult = console.log(sub(2,2));


function div(a: number, b: number): number{
    return a/b;
}
const divresult = console.log(div(2,2));


function mul(a: number, b: number): number{
    return a*b;
}
const mulresult = console.log(mul(2,2));



//3. Classes and Interface
//Interface

interface reg{
    fName: string;
    lName: string;
    age: number;
}

const user1: reg={
    fName: "Swarneem",
    lName: "Nandanwar",
    age: 23
};

console.log(user1);



//3. Classes and Inheritance
//String interpolation: ${}
// SYNTAX:
// funxtionName():type{
//     fuction
// }
class vehicle{
    constructor(public name: string){}

    honk():void{
        console.log(`${this.name} HONKSSS`);
    }
}

class twoWheeler extends vehicle{

    hasWheels():void{
        console.log(`${this.name} has two wheel`);
    }
}


class fourWheeler extends vehicle{

    hasWheels():void{
        console.log(`${this.name} has four wheel`);
    }
}

//DataType obj = new classname("parameter")
const Vehicle = new vehicle("Car");
Vehicle.honk();

const tw = new twoWheeler("Bike");
tw.hasWheels();

const fw = new fourWheeler("Car");
fw.hasWheels();


//4. Generics
function identity<T>(arg: T): T{
    return arg;
}

const num = identity<number>(42);
const str = identity<string>("Hello");

console.log(num);
console.log(str);



//6. Enum: allow you to define a set of named constant
enum Direction{
    North,
    South, 
    West,
    East
}

const move = Direction.North;
console.log(move);
//Printing value of  enum
console.log(Direction[move]);
console.log(Direction[2]);

enum Direction1{
    North = 1,
    South = 10, 
    West = 50,
    East = 0
}

console.log(Direction1.North);
console.log(Direction1.South);
console.log(Direction1.East);
console.log(Direction1.West);
*/

console.log("EXPLORING THE CODEBASE")
class Phone{
    phoneFeature: string;
    // constructor(public feature: string){
    //     console.log("Phone constructor called", feature);
    // }

    displayDetails():void{
        console.log("Smartphone features are", this.phoneFeature);
    }
}