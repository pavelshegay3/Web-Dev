import { Component, OnInit } from '@angular/core';
import { Company } from './company.interface';
import { CompanyService } from './company.service';
import { Vacancy } from './vacancy.interface';
import { VacancyService } from './vacancy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hh_front';

  companies: Company[] = [];
  vacancies: Vacancy[] = [];

  constructor(
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getAllCompanies().subscribe(companies => this.companies = companies)
  }

  showVacancies(companyId: number): void {
    this.vacancyService.getVacanciesByCompanyId(companyId).subscribe(vacancies => this.vacancies = vacancies);
  }
}
