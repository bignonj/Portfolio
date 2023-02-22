import { Injectable } from "@angular/core";
import { Company_M } from "../models/company_M.model";

@Injectable({
    providedIn: 'root'
})
export class CompaniesService {
    companies: Company_M[] = [
        {
            name: 'WeWare',
            location: 'Nantes',
            logo: 'assets/images/logo_weware.png'
          },
          {
            name: 'CNAM',
            location: 'Angers',
            logo: 'assets/images/logo_cnam.jpg'
          },
          {
            name: 'Sigma',
            location: 'La Chapelle-sur-Erdre',
            logo: 'assets/images/logo_sigma.svg'
          },
          {
            name: 'Wemoov',
            location: 'Nantes',
            logo: 'assets/images/logo_wemoov.png'
          }

    ];

    getAllCompanies(): Company_M[] {
        return this.companies;
    }
}