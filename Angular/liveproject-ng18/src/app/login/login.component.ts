import { Component, OnInit } from "@angular/core";
import { FormGroup , FormBuilder} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
   selector: "app-login",
   templateUrl: "./login.component.html",
   styleUrl : "./login.component.css",
})


export class LoginComponent implements OnInit
{
    // ! symbol is used to tell the compiler that the variable will be initialized later
    // loginForm! : FormGroup;
    // FormBuilder is a service that provides convenient methods for creating instances of FormControl, FormGroup, and FormArray

    loginForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private router: Router)
    {
        console.log("Constructor called");
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            loginid: [],
            password: []
        }
        );
    }

    // On submit for logging in
    login() {
        console.log(this.loginForm.value);
        const loginid: string = this.loginForm.get("loginid").value;
        const password: string = this.loginForm.get("password").value;


        const usersData = JSON.parse(localStorage.getItem("signUpDataArray") || "[]" )

        // Checking if the entered username and password matches with the id and password in the local storage 
        const user = usersData.find((user:any) => user.emailId === loginid && user.passWord=== password);

        // Authentication for id and password
        if(user){
            console.log("Login successful")
            alert("Login Successful");
            sessionStorage.setItem("loggedin", "yes");
            this.router.navigate(["/employees"])
        }
        else{
            console.log("Login failed");
            alert("Either Username or Password is incorrect");
        }
    }
}