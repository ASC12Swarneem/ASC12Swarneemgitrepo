import { Car } from './cars';

export class Supercar implements Car {
    id: number;
    manufacturer: string;
    model: string;
    type: string;
    year: number;
    fuelType: string;
    mileage: number;
    numberOfDoors: number;
    color?: string;
    launchDate: string;

    constructor(
        id: number,
        manufacturer: string,
        model: string,
        type: string,
        year: number,
        fuelType: string,
        mileage: number,
        numberOfDoors: number,
        launchDate: string,
        color?: string
    ) {
        this.id = id;
        this.manufacturer = manufacturer;
        this.model = model;
        this.type = type;
        this.year = year;
        this.fuelType = fuelType;
        this.mileage = mileage;
        this.numberOfDoors = numberOfDoors;
        this.launchDate = launchDate;
        if (color) this.color = color;
    }

    displayDetails(): void {
        console.log(
            `${this.manufacturer} ${this.model} is a ${this.type} supercar, launched in ${this.launchDate}, with ${this.mileage} miles, powered by ${this.fuelType}.`
        );
        if (this.color) {
            console.log(`This supercar comes in the color: ${this.color}`);
        }
    }
}
