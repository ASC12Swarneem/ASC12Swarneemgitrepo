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