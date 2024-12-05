import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  login(): void {
    this.http.get('http://localhost:3000/admin').subscribe((users: any) => {
      const user = users.find((user: any) => user.email === this.email && user.password === this.password);

      if (user) {
        sessionStorage.setItem('loggedin', 'yes');
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid email or password!';
      }
    }, (err) => {
      console.error('Error during authentication:', err);
      this.errorMessage = 'An error occurred during login.';
    });
  }
}
