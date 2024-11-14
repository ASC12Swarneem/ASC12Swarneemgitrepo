import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Issues } from "../../model/issues.model";

@Injectable({
    providedIn: "root"
})
export class IssueService {
    private baseURL: string = "http://localhost:3000/issues";

    constructor(private httpClient: HttpClient) {}

    getIssues(): Observable<Issues[]> {
        return this.httpClient.get<Issues[]>(this.baseURL);
    }

    getIssuebyID(id: number): Observable<Issues> {
        return this.httpClient.get<Issues>(`${this.baseURL}/${id}`);
    }

    createIssue(issue: Issues): Observable<Issues> {
        return this.httpClient.post<Issues>(this.baseURL, issue);
    }

    updateIssue(id: number, issue: Issues): Observable<Issues> {
        return this.httpClient.put<Issues>(`${this.baseURL}/${id}`, issue);
    }

    deleteIssue(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
    }
}
