import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListIssuesComponent } from "./list-issues/list-issues.component";
import { LoginComponent } from "./login/login.component";
import { AddIssueComponent } from "./add-issue/add-issue.component";
import { EditIssueComponent } from "./edit-issue/edit-issue.component";
import { AuthGuardService } from "./services/authguard.service";

const routes : Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'list-issue', component: ListIssuesComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'add-issue', component: AddIssueComponent, canActivate: [AuthGuardService]},
    {path: 'update/:id', component: EditIssueComponent, canActivate: [AuthGuardService]}
]

@NgModule
({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
    
}