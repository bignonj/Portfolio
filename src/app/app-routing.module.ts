import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    {path: 'companies', component : CompanyListComponent},
    {path: '', component : LandingPageComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      BrowserModule,  
      RouterModule
    ]
})
export class AppRoutingModule {}