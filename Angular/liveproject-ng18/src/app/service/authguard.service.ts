import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
@Injectable ({
    providedIn :'root'
})

// Using auth guard, the user will not be able to view the employee details without logging in
export class AuthGuardService implements CanActivate {
    constructor( private router : Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (sessionStorage.getItem('loggedIn') === 'yes') {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}