import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { BookAppointmentComponent } from "./book-appointment/book-appointment.component";
import { ManageAppointmentsComponent } from "./manage-appointments/manage-appointments.component";
import { AuthGuardService } from "./services/authguard.service";
import { ManageAdminsComponent } from "./manage-admins/manage-admins.component";

export const routes: Routes =[
    {path: '', component : LoginComponent},
    {path: 'home', component : HomeComponent, 'canActivate': [AuthGuardService]},
    {path: 'register', component : RegisterComponent},
    {path: 'book-appointment', component: BookAppointmentComponent, 'canActivate': [AuthGuardService]},
    {path: 'book-appointment/:id', component: BookAppointmentComponent, 'canActivate': [AuthGuardService]},
    {path: 'manage-appointment', component: ManageAppointmentsComponent, 'canActivate': [AuthGuardService]},
    {path: 'manage-admins', component: ManageAdminsComponent, 'canActivate': [AuthGuardService]}

]

@NgModule
({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
    
}