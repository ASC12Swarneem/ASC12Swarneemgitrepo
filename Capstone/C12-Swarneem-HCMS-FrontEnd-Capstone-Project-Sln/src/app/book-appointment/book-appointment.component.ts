import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;
  cities: string[] = [
    'Bangalore', 'Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Pune', 'Hyderabad', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ];

  departments: string[] = [
    'Radiology', 'Neurology', 'Cardiology', 'Orthopedics', 'Dermatology', 'Pediatrics',
    'Psychiatry', 'Gastroenterology', 'ENT', 'Physiotherapy'
  ];

  doctors: { [key: string]: string[] } = {
    Radiology: ['Dr. Radiology-1', 'Dr. Radiology-2'],
    Neurology: ['Dr. Neurology-1', 'Dr. Neurology-2'],
    Cardiology: ['Dr. Cardiology-1', 'Dr. Cardiology-2'],
    Orthopedics: ['Dr. Orthopedics-1', 'Dr. Orthopedics-2'],
    Dermatology: ['Dr. Dermatology-1', 'Dr. Dermatology-2'],
    Pediatrics: ['Dr. Pediatrics-1', 'Dr. Pediatrics-2'],
    Psychiatry: ['Dr. Psychiatry-1', 'Dr. Psychiatry-2'],
    Gastroenterology: ['Dr. Gastroenterology-1', 'Dr. Gastroenterology-2'],
    ENT: ['Dr. ENT-1', 'Dr. ENT-2'],
    Physiotherapy: ['Dr. Physiotherapy-1', 'Dr. Physiotherapy-2']
  };

  filteredDoctors: string[] = [];
  appointmentId!: string | null;
  isEditMode: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      patientName: ['', Validators.required],
      patientAge: ['', [Validators.required, Validators.min(1)]],
      patientWeight: ['', [Validators.required, Validators.min(1)]],
      patientCity: ['', Validators.required],
      department: ['', Validators.required],
      doctor: ['', Validators.required],
      appointmentDate: ['', Validators.required],
    });

    this.route.paramMap.subscribe((params) => {
      this.appointmentId = params.get('id');
      if (this.appointmentId) {
        this.isEditMode = true;
        this.loadAppointmentData(this.appointmentId);
      }
    });

    this.updateDoctors(); 
  }

  updateDoctors(): void {
    const selectedDepartment = this.appointmentForm.get('department')?.value;
    this.filteredDoctors = selectedDepartment ? this.doctors[selectedDepartment] : [];
    this.appointmentForm.get('doctor')?.setValue('');
  }

  loadAppointmentData(id: string): void {
    this.appointmentService.getAppointmentById(id).subscribe({
      next: (appointment) => {
        this.appointmentForm.patchValue(appointment);
        this.updateDoctors(); 
      },
      error: (err) => {
        console.error('Failed to load appointment data:', err);
      }
    });
  }

  bookAppointment(): void {
    if (this.appointmentForm.invalid) {
      alert('Please fill all the required fields.');
      return;
    }

    const appointmentData = this.appointmentForm.value;

    if (this.isEditMode) {
      this.appointmentService.editAppointment(this.appointmentId!, appointmentData).subscribe({
        next: () => {
          alert('Appointment updated successfully!');
          this.router.navigate(['/manage-appointment']);
        },
        error: (err) => {
          console.error('Failed to update appointment:', err);
        }
      });
    } else {
      this.appointmentService.appointmentEnroll(appointmentData).subscribe({
        next: () => {
          alert('Appointment created successfully!');
          this.router.navigate(['/manage-appointment']);
        },
        error: (err) => {
          console.error('Failed to create appointment:', err);
        }
      });
    }
  }
}
