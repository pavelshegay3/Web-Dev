import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "./company.interface";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    private baseUrl = 'http://127.0.0.1:8000/companies/';
    constructor(private http: HttpClient) {
    }
    getAllCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.baseUrl);
    }
}