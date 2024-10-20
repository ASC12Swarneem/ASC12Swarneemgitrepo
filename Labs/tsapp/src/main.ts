import { Car } from './cars';
import { CarManager } from './carManager';
import * as readlineSync from 'readline-sync';

console.log("Welcome to the Car Management System!");

const carManager = new CarManager();

carManager.addCar({
    id: 1,
    manufacturer: 'BMW',
    model: 'M5',
    type: 'Sedan',
    year: 2001,
    fuelType: 'Petrol',
    mileage: 20,
    numberOfDoors: 4,
    color: 'Red',
    launchDate: '2023-12-23',
});

carManager.addCar({
    id: 2,
    manufacturer: 'Audi',
    model: 'R8',
    type: 'Coupe',
    year: 2020,
    fuelType: 'Petrol',
    mileage: 15,
    numberOfDoors: 2,
    color: 'Black',
    launchDate: '2020-06-15',
});

//Taking user input
function inputCarDetails(): Car {
    const id = parseInt(readlineSync.question('Enter car ID: '));
    const manufacturer = readlineSync.question('Enter car manufacturer: ');
    const model = readlineSync.question('Enter car model: ');
    const type = readlineSync.question('Enter car type: ');
    const year = parseInt(readlineSync.question('Enter car year: '));
    const fuelType = readlineSync.question('Enter car fuel type: ');
    const mileage = parseFloat(readlineSync.question('Enter car mileage: '));
    const numberOfDoors = parseInt(readlineSync.question('Enter number of doors: '));
    const color = readlineSync.question('Enter car color (optional): ');
    const launchDate = readlineSync.question('Enter car launch date (YYYY-MM-DD): ');

    return {
        id,
        manufacturer,
        model,
        type,
        year,
        fuelType,
        mileage,
        numberOfDoors,
        color: color || undefined,
        launchDate
    };
}

function promptContinue() {
    const answer = readlineSync.question('Continue? (y/n): ');
    if (answer.toLowerCase() !== 'y') {
        console.log('Exiting...');
        process.exit(0);
    }
}

console.log('All Cars:', carManager.listCars());
promptContinue();

console.log('Please enter the details of the car to add:');
const newCar = inputCarDetails();
carManager.addCar(newCar);
console.log('Car added successfully!');
console.log('All Cars:', carManager.listCars());
promptContinue();


const manufacturerFromUser = readlineSync.question('Enter the car manufacturer to filter: ');
const filteredCars = carManager.filterCarsByManufacturer(manufacturerFromUser);
console.log(`Filtered Cars by manufacturer "${manufacturerFromUser}":`, filteredCars);
promptContinue();

const carIdToRemove = parseInt(readlineSync.question('Enter the car ID to remove: '));
carManager.removeCar(carIdToRemove);
console.log(`Car with ID ${carIdToRemove} removed successfully.`);
console.log('Cars after removal:', carManager.listCars());
promptContinue();

const carIdToFind = parseInt(readlineSync.question('Enter the car ID to find: '));
console.log(`Car with ID ${carIdToFind}:`, carManager.findById(carIdToFind));
promptContinue();


const carIdToDisplay = parseInt(readlineSync.question('Enter the car ID to display details: '));
carManager.displayCarDetails(carIdToDisplay);
promptContinue();

console.log('Displaying all car details:');
carManager.displayAllCarDetails();
promptContinue();


/*
//Old code 
console.log("Welcome to the project Management System App");

//Step 1: Import the ProductManager class
import { CarManager } from "./carManager";
import { Car } from "./cars";   

//Step 2: Create an instance of the ProductMana{ger class
const carManager = new CarManager();

//Step 3: Create a product object
//JS object
const car :Car = {
    id: 1,
    manufacturer: 'BMW',         
    model: 'M5',
    type: 'sedan',        
    year: 2001,          
    fuelType: 'Petrol',       
    mileage: 20,        
    numberOfDoors: 4,  
    color: 'Red', 
    launchDate: '23/12/2023'
};

//Step 4: Add the product to the productManager
carManager.addCar(car);
console.clear;
//Step 5: List all the products
let cars: Car[] = carManager.listCars();
console.log(car);

//Step 6: Creating another object
const car2 :Car = {
    id: 2,
    manufacturer: 'BMW',         
    model: 'X7',
    type: 'SUV',        
    year: 2023,          
    fuelType: 'Petrol',       
    mileage: 20,        
    numberOfDoors: 4,  
    color: 'Black', 
    launchDate: '23/12/2020'
};

//STEP 7: Adding the car to the list with id 2
carManager.addCar(car2);

cars = carManager.listCars();
console.log(cars);

//Step 8: Searching the car by id
carManager.searchByID(6);
*/