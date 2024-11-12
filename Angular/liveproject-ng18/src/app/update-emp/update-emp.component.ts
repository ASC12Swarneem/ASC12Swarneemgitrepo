import { Component} from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component(
{
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})


export class UpdateEmpComponent 
{
  id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router)
  {

  }

  // ngOnInit():void
  // {
  //   this.id = ++this.route.snapshot.paramMap.get['id'];
  //   this.employee = new Employee();
  //   this.employeeService.getEmployeebyID(this.id).subscribe(searchedEmployee =>
  //   {
  //     this.employee =searchedEmployee;
  //   }, error => console.log(error));
  // }

  ngOnInit(): void {
    // Get the employee ID from the route and fetch employee details
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.employeeService.getEmployeebyID(this.id).subscribe(
      data => {
        this.employee = data;
      },
      error => console.log(error)
    );
  }  

  updateEmployee() : void {
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(updatedEmployee => 
      {
        console.log("Employee Updated", updatedEmployee)
        // After updating the employee we will be redirected to employee table
        this.router.navigate(['/employees']);
      }, 
        error => console.log(error));
  }
}
