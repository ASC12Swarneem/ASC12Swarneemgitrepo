import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Appointment } from "../../model/appointment.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn:"root"
})

export class AppointmentService{
    private appointmentUrl = 'http://localhost:3001/appointments';

    constructor (private http:HttpClient){}

    getAppointments(): Observable<Appointment[]> {
        return this.http.get<Appointment[]>(this.appointmentUrl);
    }

    getAppointmentById(id: string): Observable<Appointment> {
        return this.http.get<Appointment>(`${this.appointmentUrl}/${id}`);
    }


    editAppointment(id: string, updatedAppointment: Appointment): Observable<any> {
        return this.http.put<any>(`${this.appointmentUrl}/${id}`, updatedAppointment);
    }

    appointmentEnroll(appointment:Appointment):Observable<any>{
        return this.http.post<any>(this.appointmentUrl,appointment)
    }

    updateIssue(id: number, appointment: Appointment): Observable<Appointment> 
    {
        return this.http.put<Appointment>(`${this.appointmentUrl}/${id}`, appointment);
    }

    
    deleteAppointment(id: number): Observable<any> {
        const url = `${this.appointmentUrl}/${id}`; 
        return this.http.delete<any>(url);
    }
}