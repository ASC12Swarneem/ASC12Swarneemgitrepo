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

    getAdmins(): Observable<any> {
        return this.http.get<any>(this.adminUrl);
    }

    getAdminById(id: string): Observable<any> {
        return this.http.get<any>(`${this.adminUrl}/${id}`);
    }

    addAdmin(admin:Admin):Observable<any>{
        return this.http.post<any>(this.adminUrl,admin)
    }

    deleteAdmin(id: string): Observable<any> {
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