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
