import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import { SharedService } from '../services/shared.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css']
})
export class ManageAppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = []; 
  searchQuery: string = '';

  constructor(
    private appointmentService: AppointmentService,
    private sharedService: SharedService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
    this.sharedService.searchQuery$.subscribe((query) => {
      this.filterAppointments(query);
    });
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
        this.filteredAppointments = data;
      },
      error: (err) => {
        console.error('Failed to load appointments:', err);
      }
    });
  }

  filterAppointments(query: string): void {
    if (!query) {
      this.filteredAppointments = this.appointments;
    } else {
      this.filteredAppointments = this.appointments.filter((appointment) =>
        appointment.id?.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  editAppointment(appointmentId: string | undefined): void {
    if (appointmentId) {
      this.router.navigate(['book-appointment', appointmentId]);
    }
  }

  deleteAppointment(toDeleteAppointment: Appointment): void {
    if (toDeleteAppointment.id) {
      this.appointmentService.deleteAppointment(toDeleteAppointment.id).subscribe({
        next: () => {
          this.appointments = this.appointments.filter(
            (appointment) => appointment.id !== toDeleteAppointment.id
          );
          this.filteredAppointments = this.filteredAppointments.filter(
            (appointment) => appointment.id !== toDeleteAppointment.id
          );
        },
        error: (err) => {
          console.error('Failed to delete appointment:', err);
        }
      });
    }
  }
}