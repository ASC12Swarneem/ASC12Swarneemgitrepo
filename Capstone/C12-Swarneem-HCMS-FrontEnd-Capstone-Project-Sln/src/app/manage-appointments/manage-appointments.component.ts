import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrl: './manage-appointments.component.css'
})
export class ManageAppointmentsComponent implements OnInit{

  appointments: Appointment[] = [];
  appointmentService: AppointmentService;

  constructor(appointmentService: AppointmentService,private router: Router) {
    this.appointmentService = appointmentService;
  }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
        console.log('Appointments:', this.appointments);
      },
      error: (err) => {
        console.error('Failed to load appointments', err);
      },
    });    
  }

  editAppointment(appointmentId: number | undefined):void{
    if (appointmentId !== undefined) {
      this.router.navigate(['book-appointment', appointmentId]);
    }
  }

  deleteAppointment(toDeleteAppointment: Appointment) {
      if(toDeleteAppointment.id !== undefined){
        this.appointmentService.deleteAppointment(toDeleteAppointment.id).subscribe(() =>{
          this.appointments = this.appointments.filter(appointment =>appointment.id !==toDeleteAppointment.id)
        })
      }
    }
}
