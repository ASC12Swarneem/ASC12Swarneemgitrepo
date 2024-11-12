import { Component, Output, EventEmitter } from '@angular/core';
import { AuthGuardService } from '../service/authguard.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent 
{
  constructor(protected authService: AuthGuardService)
  {

  }

  logout() 
  {
    this.authService.logout();
  }

}

