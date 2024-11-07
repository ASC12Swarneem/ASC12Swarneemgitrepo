import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { CommonModule } from '@angular/common';
import { CarService } from '../Service/CarService';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  providers : [CarService]
})

export class AppComponent implements OnInit {
  title = 'angularApp';
  cars: Car[] = []; 
  newCars: Car = {id: 0, manufacturer: '', car_model: '', car_type: '', fuel_type:'' }

  constructor(private carService: CarService) {}

  // ngOnInit(): void {
  //   console.log("Asynchronously retrieving data from the server");
  //   this.carService.getCars().subscribe(data => this.cars = data);
  // }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe((data)=>{
      this.cars = data;
    })
  }

  // Add new car
  addCar() {
    this.carService.createCar(this.newCars).subscribe((car) => {
      this.cars.push(car);
      this.newCars = { id: 0, manufacturer: '', car_model: '', car_type: '', fuel_type: '' }; // Reset form
    });
  }

  // Edit an existing car
  editCar(car: Car) {
    this.newCars = { ...car }; // Fill form with car details
  }

  // Update car details
  updateCar() {
    const carId = this.newCars.id ?? 0;
    this.carService.updateCar(carId, this.newCars).subscribe(() => {
      this.getCars(); // Refresh list
      this.newCars = { id: 0, manufacturer: '', car_model: '', car_type: '', fuel_type: '' }; // Reset form
    });
  }

  // Delete car by id
  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
}

  // deleteCar(id: number) {
  //   console.log('Deleting car with id: ', id)
  //   this.carService.deleteCar(id).subscribe(() => {
  //     this.cars = this.cars.filter((car) => car.id !== id);
  //   });
  // }
}

