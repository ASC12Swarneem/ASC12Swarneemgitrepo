/*
    Importing the libraries 
*/

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService{
    baseUrl: string = 'http://localhost:3000/employees';
    // private http: HttpClient;
    //Dependency Injection
    constructor(private http: HttpClient){
        //Perform the HTTP requests
        this.http = http;
    }

    getEmployees(){
        return this.http.get<Employee[]>(this.baseUrl);
    }
}


// @Injectable({ create a js object
//     providedIn: 'root'
// })