import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
    private http: HttpClient,
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
            passwordStrengthValidator(), // Use the custom password strength validator
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  // Password match validator to check if passwords match
  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  // Register function to submit the form data
  register(): void {
    if (this.signUpForm.invalid) {
      alert('Please fill the form correctly.');
      return;
    }

    const adminData = this.signUpForm.value; // Get form data
    delete adminData.confirmPassword; // Remove confirmPassword before sending

    this.http.post('http://localhost:3000/admin', adminData).subscribe({
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
