import { Component, OnInit } from '@angular/core';
import { Company_M } from '../models/company_M.model';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies!: Company_M[];

  constructor(private companiesService : CompaniesService) {}
 
  ngOnInit(): void {
    this.companies = this.companiesService.getAllCompanies();
  }

}
