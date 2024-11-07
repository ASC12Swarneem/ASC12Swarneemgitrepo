import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee.model';
import { EmployeeService } from './Service/employeeService';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

  //This we can put in the app.component.html file 
  //If it is a large data then put it in a seperate component
  //Just use the templateUrl to use the file and same can be done in styles(CSS)
  // template: `<h1>This is my app</h1><br>
  // <p>csadchadjajdxqjdjequduqhgeufjqdqwidqmchjqouwhdouhwqhdijoidjoqhdhqwdhowqjdlhqhquwhicojqjclj</p>`,
  // styles: `h1{color: red}
  //           p{color: red}`
          
})
export class AppComponent implements OnInit {
  title = 'angularApp';
  employees? : Employee[];

constructor (private employeeService: EmployeeService){}
ngOnInit(): void {
  console.log("Asynchronously retriving data from the server");
  this.employeeService.getEmployees().subscribe(data=>this.employees = data)
}
}
