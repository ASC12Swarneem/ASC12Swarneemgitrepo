import {Car} from './cars';
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
}

