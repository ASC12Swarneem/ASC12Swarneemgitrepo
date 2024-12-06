import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Admin } from "../../model/admin.model";


@Injectable({
    providedIn:"root"
})

export class AdminService{
    private adminUrl = 'http://localhost:8080/api/admins';

    constructor (private http:HttpClient){}

    getAdmins(): Observable<Admin[]> {
        return this.http.get<Admin[]>(this.adminUrl);
    }

    getAdminById(id: string): Observable<Admin> {
        return this.http.get<Admin>(`${this.adminUrl}/${id}`);
    }


    editAdmin(id: string, updatedAdmin: Admin): Observable<any> {
        return this.http.put<any>(`${this.adminUrl}/${id}`, updatedAdmin);
    }

    //Post Maooing
    addAdmin(admin:Admin):Observable<any>{
        return this.http.post<any>(this.adminUrl,admin)
    }

    updateAdmin(id: number, admin: Admin): Observable<Admin> 
    {
        return this.http.put<Admin>(`${this.adminUrl}/${id}`, admin);
    }

    
    deleteAdmin(id: number): Observable<any> {
        const url = `${this.adminUrl}/${id}`; 
        return this.http.delete<any>(url);
    }

    /**
    * Validate admin login using email and password.
    * @param email Admin email.
    * @param password Admin password.
    * @returns Observable containing admin data if found, or null if not found.
    */
   loginAdmin(email: string, password: string): Observable<Admin | null> {
     return this.http.get<Admin[]>(this.adminUrl).pipe(
       map((admins: Admin[]) => {
         return admins.find(
           (admin) => admin.email === email && admin.password === password
         ) || null;
       })
     );
   }
}