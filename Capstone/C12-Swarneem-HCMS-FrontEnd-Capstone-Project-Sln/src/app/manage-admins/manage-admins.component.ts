import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/admin.model';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrl: './manage-admins.component.css'
})
export class ManageAdminsComponent implements OnInit{
  admins : any[] = [];

  constructor(private adminService: AdminService, private route: Router, private sharedService: SharedService){}


  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.adminService.getAdmins().subscribe({
      next: (data) => {
        this.admins = data;
      },
      error: (err) => {
        console.error('Failed to load appointments:', err);
      }
    });
  }


  deleteAdmin(id: string): void {
    this.adminService.deleteAdmin(id).subscribe(() => {
        this.loadAdmins();
    });
}

}
