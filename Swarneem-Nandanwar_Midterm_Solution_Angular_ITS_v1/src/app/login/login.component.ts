import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent 
{
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) 
  {

  }

  login(): void {
    const email = 'swarneem@gmail.com';
    const password = 'pass';

    if (this.email === email && this.password === password) 
    {
      sessionStorage.setItem('loggedin', 'yes');
      this.router.navigate(['/list-issue']); 
    } 
    else 
    {
      this.errorMessage = 'Invalid email or password!';
    }
  }
}
