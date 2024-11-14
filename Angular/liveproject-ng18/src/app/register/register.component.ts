import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { CommonModule } from '@angular/common';

@Component(
  {
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
  })

export class RegisterComponent 
{
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,  private router: Router, private employeeService: EmployeeService)
  {
    this.employeeForm = this.formBuilder.group(
    {
      //Validation 
      id: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], 
      name: ['', [Validators.required, Validators.minLength(3)]], 
      salary: ['', [Validators.required, Validators.min(0)]]
    })
  }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group(
    {
        id: [],
        name: [],
        salary: []
    });
}


onSubmit() 
{
  if (this.employeeForm.valid) 
    {
    const employeeData = this.employeeForm.value;

    console.log('Employee registered:', employeeData);
    alert("Registered successfully")

    this.employeeService.createEmployee(employeeData).subscribe(
    {
        next:(_Response) =>
        {
          this.router.navigate(['/employees']);
        }
    })

  } 
  else 
  {
    console.log('Form is invalid');
  }
}
}
