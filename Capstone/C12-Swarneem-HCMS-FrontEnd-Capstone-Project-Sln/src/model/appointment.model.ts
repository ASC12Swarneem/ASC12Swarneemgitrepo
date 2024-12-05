// export interface Appointment{
//     id: number;
//     patientName: string;
//     patientAge: number;  
//     patientWeight: number;
//     patientCity: string;
//     department: string;
//     doctor: string;
//     appointmentDate: Date;    
// }

export class Appointment {
  id?: number;
  patientName?: string;
  patientAge?: number;
  patientWeight?: number;
  patientCity?: string;
  department?: string;
  doctor?: string;
  appointmentDate?: Date; // or Date, depending on your backend response
}
