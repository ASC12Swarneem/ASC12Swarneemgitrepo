import { Car } from './cars';

export class CarManager {
    private cars: Car[] = [];

    //Listing all cars
    listCars(): Car[] {
        return this.cars;
    }

    //Adding new car
    addCar(car: Car): void {
        this.cars.push(car);
    }

    //Update an existing car
    updateCar(id: number, updatedCar: Car): void {
        const index = this.cars.findIndex(car => car.id === id);
        if (index !== -1) {
            this.cars[index] = updatedCar;
        } else {
            console.log(`Car with id ${id} not found.`);
        }
    }

    //Remove a car
    removeCar(id: number): void {
        this.cars = this.cars.filter(car => car.id !== id);
        console.log(`Car with id ${id} removed successfully.`);
    }

    //Ssearching a car by ID
    findById(id: number): Car | undefined {
        return this.cars.find(car => car.id === id);
    }

    //Displaying car details by ID
    displayCarDetails(id: number): void {
        const car = this.findById(id);
        if (car) {
            this.logCarDetails(car);
        } else {
            console.log(`Car with id ${id} not found.`);
        }
    }

    // Method to display details of all cars
    displayAllCarDetails(): void {
        this.cars.forEach(car => this.logCarDetails(car));
    }

    // Method to filter cars by manufacturer
    filterCarsByManufacturer(manufacturer: string): Car[] {
        return this.cars.filter(car => car.manufacturer.toLowerCase() === manufacturer.toLowerCase());
    }

    // Method to filter cars by type (e.g., sedan, SUV, etc.)
    filterCarsByType(type: string): Car[] {
        return this.cars.filter(car => car.type.toLowerCase() === type.toLowerCase());
    }

    // Reusable method to log car details
    private logCarDetails(car: Car): void {
        console.log(`Car Details:
        ID: ${car.id}
        Manufacturer: ${car.manufacturer}
        Model: ${car.model}
        Type: ${car.type}
        Year: ${car.year}
        Fuel Type: ${car.fuelType}
        Mileage: ${car.mileage} MPG
        Number of Doors: ${car.numberOfDoors}
        Color: ${car.color}
        Launch Date: ${car.launchDate}`);
    }
}

//Old code
/*import {Car} from './cars';
export class CarManager{
    private cars : Car[] = [];

    addCar(car: Car):void{
        this.cars.push(car);
    }

    listCars():Car[]{
        return this.cars;
    };

    removeCar(id:number):void{
        this.cars = this.cars.filter(car => car.id !==id);
        console.log(`Car with id ${id} removed successfully`);
    }

    searchByID(id: number): Car | undefined {
        const foundCar = this.cars.find(car => car.id === id);
        if (foundCar) {
            return foundCar;
        } else {
            console.log(`Car with id ${id} not found`);
            return undefined;
        }
    }
}
*/