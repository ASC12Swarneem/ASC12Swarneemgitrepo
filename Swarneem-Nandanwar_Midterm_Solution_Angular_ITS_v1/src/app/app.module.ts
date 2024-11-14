import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LoginComponent } from "./login/login.component";
import { AddIssueComponent } from "./add-issue/add-issue.component";
import { ListIssuesComponent } from "./list-issues/list-issues.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditIssueComponent } from "./edit-issue/edit-issue.component";

@NgModule({
    declarations: [
                    AppComponent,
                    AddIssueComponent,
                    HomeComponent,
                    LoginComponent,
                    NavBarComponent,
                    ListIssuesComponent,
                    EditIssueComponent
                ],
    imports: [
                BrowserModule,
                AppRoutingModule,
                RouterModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule
    ],

    bootstrap: [AppComponent]
})

export class AppModule{

}