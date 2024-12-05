import { Component } from '@angular/core';
import { AuthGuardService } from '../services/authguard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(protected authService: AuthGuardService)
  {

  }

  logout() 
  {
    this.authService.logout();
  }

}
