import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { AuthGuardService } from '../service/authguard.service';

@Component
({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})

export class ListEmpComponent implements OnInit 
{
  employees : Employee[];
  employeeService : EmployeeService;
  
  // employees: Employee[] = [];
  searchEmp: Employee[] | null = null;  // Set to null when no search is active
  searchinpt: string = '';



  constructor(employeeService : EmployeeService, 
              private router: Router, 
              protected authService: AuthGuardService)
  {
    this.employeeService = employeeService;
  }

  ngOnInit(): void 
  {
    this.employeeService.getEmployees().subscribe((employeeData) =>
    {
      this.employees = employeeData;
      this.searchEmp = employeeData;
    });
  }

  deleteEmployee(toDeleteEmployee: Employee): void 
  {
    if (toDeleteEmployee.id !== undefined) 
      {
        // deleting the employee from the list
        this.employeeService.deleteEmployee(toDeleteEmployee.id).subscribe(() => 
        {
          this.employees = this.employees.filter(employee => employee.id !== toDeleteEmployee.id);
          this.employeeSearch();
        })
      }
    }

  updateEmployee(employeeId: number | undefined): void 
    {
      if (employeeId !== undefined) 
      {
        this.router.navigate(['update', employeeId]);
      }
        else 
      {
        console.log("Employee Id is undefined");
      }
    }

    employeeSearch(): void {
      const searchTerm = this.searchinpt.toLowerCase().trim();
      if (searchTerm) {
        // Filter employees by name (case-insensitive)
        this.searchEmp = this.employees.filter(employee =>
          employee.name.toLowerCase().includes(searchTerm)
        );
        if (this.searchEmp.length > 0) {
          console.log("Employee(s) found:", this.searchEmp);
        } else {
          console.log("No matching employee found for search term:", this.searchinpt);
        }
      } else {
        // If search input is empty, reset to show all employees
        this.searchEmp = this.employees;
        console.log("Showing all employees");
      }
    }
  

    // employeeSearch(): void {
    //   const searchTerm = this.searchinpt.toLowerCase().trim();
    //   if (searchTerm) {
    //     // Filter employees by name dynamically (case-insensitive)
    //     this.searchEmp = this.employees.filter(employee =>
    //       employee.name.toLowerCase().includes(searchTerm)
    //     );
    //   } else {
    //     // If the input is cleared, show all employees
    //     this.searchEmp = this.employees;
    //   }
    // }
}
