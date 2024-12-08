import { Component, EventEmitter, Output } from '@angular/core';
import { AuthGuardService } from '../services/authguard.service';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchQuery: string = '';

  onSearch(): void {
    this.searchEvent.emit(this.searchQuery.trim());
  }
  constructor(protected authService: AuthGuardService, private sharedService: SharedService)
  {

  }

  logout() 
  {
    this.authService.logout();
  }


  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const query = input.value.trim();
    this.sharedService.updateSearchQuery(query); // Emit the query to shared service
  }
}
