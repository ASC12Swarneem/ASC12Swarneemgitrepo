import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service'; // Import AdminService
import { passwordStrengthValidator } from './password-strength.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        password: [
          '',
          [
            Validators.required,
            passwordStrengthValidator(),
          ],
        ],
        confirmPassword: ['', Validators.required],
      }, 
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }
  register(): void {
    if (this.signUpForm.invalid) {
      alert('Please fill the form correctly.');
      return;
    }
    this.passwordMatchValidator;

    const adminData = this.signUpForm.value;
    this.adminService.addAdmin(adminData).subscribe({
      next: () => {
        alert('Registration successful!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error during registration:', err);
        alert('Registration failed. Please try again.');
      },
    });
  }
}
