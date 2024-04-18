import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vacancy } from "./vacancy.interface";

@Injectable({
    providedIn: 'root'
})
export class VacancyService {
    private baseUrl = 'http://127.0.0.1:8000/vacancies/';
    private baseUrl2 = 'http://127.0.0.1:8000/';
    constructor(private http: HttpClient) { }
    getVacanciesByCompanyId(companyId: number): Observable<Vacancy[]> {
        return this.http.get<Vacancy[]>(`${this.baseUrl2}companies/${companyId}/vacancies/`);
    }
}