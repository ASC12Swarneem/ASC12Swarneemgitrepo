import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register/register.component";
import { BookAppointmentComponent } from "./book-appointment/book-appointment.component";
import { HttpClientModule } from "@angular/common/http";
import { ManageAppointmentsComponent } from "./manage-appointments/manage-appointments.component";
import { ManageAdminsComponent } from "./manage-admins/manage-admins.component";

@NgModule({
    declarations:[  AppComponent,
                    HomeComponent,
                    NavbarComponent,
                    LoginComponent,
                    RegisterComponent,
                    BookAppointmentComponent,
                    ManageAppointmentsComponent,
                    ManageAdminsComponent
    ],

    imports:[   BrowserModule,
                RouterOutlet,
                AppRoutingModule,
                FormsModule,
                HttpClientModule,
                ReactiveFormsModule
    ],

    bootstrap: [ AppComponent ]
})

export class AppModule{

}