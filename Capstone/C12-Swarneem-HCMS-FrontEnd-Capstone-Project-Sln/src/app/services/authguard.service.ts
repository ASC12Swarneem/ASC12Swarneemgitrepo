import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
@Injectable ({
    providedIn :'root'
})

export class AuthGuardService implements CanActivate 
{
    constructor( private router : Router) 
    { 
        
    }
    canActivate(_route: ActivatedRouteSnapshot): boolean 
    {
        if (sessionStorage.getItem('loggedin') === 'yes') 
        {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    logout(): void
    {
        sessionStorage.removeItem('loggedin');
        this.router.navigate(['/']);
        console.log("Logging out")
    }

    isLoggedIn(): boolean 
    {
        return sessionStorage.getItem('loggedin') === 'yes';
    }
}