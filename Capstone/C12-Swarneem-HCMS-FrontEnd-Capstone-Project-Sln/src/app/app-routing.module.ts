import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { BookAppointmentComponent } from "./book-appointment/book-appointment.component";
import { ManageAppointmentsComponent } from "./manage-appointments/manage-appointments.component";

export const routes: Routes =[
    {path: '', component : LoginComponent},
    {path: 'home', component : HomeComponent},
    {path: 'register', component : RegisterComponent},
    {path: 'book-appointment', component: BookAppointmentComponent},
    {path: 'book-appointment/:id', component: BookAppointmentComponent},
    {path: 'manage-appointment', component: ManageAppointmentsComponent}
]

@NgModule
({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
    
}