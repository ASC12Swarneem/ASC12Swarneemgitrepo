import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { AuthGuardService } from "./service/authguard.service";

const routes: Routes = [
    // Adding the routing paths to the angular app, also adding the authguard services
    {path: '', component: HomeComponent},
    {path: 'employees', component: ListEmpComponent, canActivate: [AuthGuardService]},
    {path: 'update/:id', component: UpdateEmpComponent, canActivate: [AuthGuardService]},
    {path: 'login' , component: LoginComponent},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuardService]},
    {path: '**', component: LoginComponent}

   ]
   @NgModule({
       imports: [RouterModule.forRoot(routes)],
       exports: [RouterModule],
    
   })
   export class AppRoutingModule {
    
}