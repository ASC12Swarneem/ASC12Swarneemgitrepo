import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router } from "@angular/router";

@Component
(
  {
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
  }
)

export class SignUpComponent implements OnInit
{
  signUpForm!: FormGroup;
  submitted = false;
  signUpData;

  constructor(private fromBuilder: FormBuilder, private router: Router)
  {
    
  }

  ngOnInit(): void 
  {
    this.signUpForm = this.fromBuilder.group({
      adminName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      passWord: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]]
    })
  }

  get f() 
  {
    return this.signUpForm.controls;
  }
  
  onSubmit()
  {
    this.submitted = true;
    if(this.signUpForm.invalid)
    {
      return;
    }

    const newUserData = this.signUpForm.value;
    const existingUsers = JSON.parse(localStorage.getItem('signUpDataArray') || '[]')

    existingUsers.push(newUserData);

    localStorage.setItem('signUpDataArray', JSON.stringify(existingUsers));

    console.log("Registered user is :", existingUsers);

    alert("User signed up successfully");
    this.router.navigate(['/login']);
  }
}
