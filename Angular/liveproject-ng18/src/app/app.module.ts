import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
    declarations: [
        HomeComponent,
        AppComponent, 
        LoginComponent,
        ListEmpComponent,
        NavBarComponent,
        UpdateEmpComponent,
        SignUpComponent
        ],

    imports: [
        BrowserModule, 
        AppRoutingModule, 
        ReactiveFormsModule,
        FormsModule, 
        HttpClientModule, 
        ],


    // imports: [HttpClientModule, BrowserModule],
    bootstrap: [AppComponent]
})

export class AppModule{

}