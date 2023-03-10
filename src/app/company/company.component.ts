import { Component, Input, OnInit } from '@angular/core';
import { Company_M } from '../models/company_M.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() company!: Company_M;

  ngOnInit() {}
}
