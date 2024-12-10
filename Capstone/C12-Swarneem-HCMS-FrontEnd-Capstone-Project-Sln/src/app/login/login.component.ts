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
  loginAttempts: number = 0;
  isLockedOut: boolean = false;
  lockoutTime: number = 0;
  interval: any;

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit() {
    const savedLockoutTime = parseInt(sessionStorage.getItem('lockoutTime') || '0', 10);
    const savedTimestamp = parseInt(sessionStorage.getItem('lockoutTimestamp') || '0', 10);

    if (savedTimestamp && savedLockoutTime) {
      const elapsed = Math.floor((Date.now() - savedTimestamp) / 1000);
      const remainingTime = savedLockoutTime - elapsed;

      if (remainingTime > 0) {
        this.activateLockout(remainingTime);
      } else {
        this.resetLockout();
      }
    }
  }

  login(): void {
    if (this.isLockedOut) {
      return;
    }

    this.adminService.loginAdmin(this.email, this.password).subscribe(
      (user) => {
        if (user) {
          sessionStorage.setItem('loggedin', 'yes');
          sessionStorage.setItem('adminId', user.toString());
          this.router.navigate(['/home']);
          this.resetLoginAttempts();
        } else {
          this.handleFailedLogin();
        }
      },
      (err) => {
        console.error('Error during authentication:', err);
        this.errorMessage = 'An error occurred during login.';
      }
    );
  }

  handleFailedLogin() {
    this.loginAttempts++;
    const attemptsLeft = 3 - this.loginAttempts;
    if (this.loginAttempts >= 3) {
      this.activateLockout();
      this.errorMessage = `Account locked due to multiple failed login attempts. Please wait ${this.lockoutTime} seconds.`;
    } else {
      this.errorMessage = `Invalid email or password! ${attemptsLeft} attempt${attemptsLeft !== 1 ? 's' : ''} left.`;
    }
  }
  
  activateLockout(remainingTime: number = 5) {
    this.isLockedOut = true;
    this.lockoutTime = remainingTime;

    sessionStorage.setItem('lockoutTime', this.lockoutTime.toString());
    sessionStorage.setItem('lockoutTimestamp', Date.now().toString());

    this.interval = setInterval(() => {
      this.lockoutTime--;
      sessionStorage.setItem('lockoutTime', this.lockoutTime.toString());
      if (this.lockoutTime <= 0) {
        this.resetLockout();
      }
    }, 1000);
  }

  resetLockout() {
    clearInterval(this.interval);
    this.isLockedOut = false;
    this.lockoutTime = 0;
    this.loginAttempts = 0;

    sessionStorage.removeItem('lockoutTime');
    sessionStorage.removeItem('lockoutTimestamp');
  }

  resetLoginAttempts() {
    this.loginAttempts = 0;
    sessionStorage.removeItem('lockoutTime');
    sessionStorage.removeItem('lockoutTimestamp');
  }
}