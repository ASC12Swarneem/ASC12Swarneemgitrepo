import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Appointment } from "../../model/appointment.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn:"root"
})

export class AppointmentService{
    private currentNumber: number = 0;
    private appointmentUrl = 'http://localhost:8080/api/appointments';

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

    //Post Mapping
    addAppointment(appointment:Appointment):Observable<any>{
        return this.http.post<any>(this.appointmentUrl,appointment)
    }

    updateAppointment(id: number, appointment: Appointment): Observable<Appointment> 
    {
        return this.http.put<Appointment>(`${this.appointmentUrl}/${id}`, appointment);
    }


    deleteAppointment(id: string): Observable<any> {
        const url = `${this.appointmentUrl}/${id}`; 
        return this.http.delete<any>(url);
    }
}