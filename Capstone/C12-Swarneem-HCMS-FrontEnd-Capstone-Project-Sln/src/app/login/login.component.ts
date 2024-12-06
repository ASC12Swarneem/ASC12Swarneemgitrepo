import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private adminService: AdminService) {}

  login(): void {
    this.adminService.loginAdmin(this.email, this.password).subscribe(
      (user) => {
        if (user) {
          sessionStorage.setItem('loggedin', 'yes');
          sessionStorage.setItem('adminId', user.toString()); // Save user ID or other details if needed
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Invalid email or password!';
        }
      },
      (err) => {
        console.error('Error during authentication:', err);
        this.errorMessage = 'An error occurred during login.';
      }
    );
  }
}
