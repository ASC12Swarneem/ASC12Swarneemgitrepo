//1. Connect to an external API to get the list of employees
import { HttpClient } from "@angular/common/http";

//2. Create a service to get list of employees
import { Injectable } from "@angular/core";

//3. Use an observable to get the list of employees
import { Observable } from "rxjs";

//4. Use the employee model to define the structure of the employee object
import { Employee } from "../../model/employee.model";


//If we are writing a service @injectable is used
@Injectable({
    providedIn: "root"
})


export class EmployeeService{
    baseURL : string = "http://localhost:3000/employees";

    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    //Get an employee
    getEmployees(){
        return this.httpClient.get<Employee[]>(this.baseURL);
    }

    //Get an employee by ID
    getEmployeebyID(id : number){
        return this.httpClient.get<Employee>(this.baseURL+ "/" +id);
    }

    // EmployeeService
    createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseURL, employee);
    }

    //Updating the employee
    updateEmployee(id: number, employee: any){
        return this.httpClient.put(this.baseURL + "/" + id, employee);
    }

  // delete an employee
  deleteEmployee(id: number){
    return this.httpClient.delete(this.baseURL + "/" + id);
}
}



