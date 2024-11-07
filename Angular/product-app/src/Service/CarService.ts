import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Car } from "../model/car.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CarService{
    baseUrl: string = 'http://localhost:3000/cars';
    // private http: HttpClient;
    //Dependency Injection
    constructor(private http: HttpClient){
        //Perform the HTTP requests
        this.http = http;
    }

    getCars(){
        return this.http.get<Car[]>(this.baseUrl);
    }

    // getCars(): Observable<Car[]> {
    //     return this.http.get<Car[]>(this.baseUrl);
    // }

    createCar(car: Car): Observable<Car>{
        return this.http.post<Car>(this.baseUrl, car);
    }

    // deleteCar(id: number) Observable<void>{
    //     return this.http.delete<void>(`$(this.baseUrl)/${id}`)
    // }

    deleteCar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    updateCar(id: number, car: Car): Observable<Car> {
        return this.http.put<Car>(`${this.baseUrl}/${id}`, car);
    }

    // updateCar(id: number, car: Car) Observable<void>{
    //     return this.http.put<Car>(`${this.baseUrl}/${id}`);
    // }
}
