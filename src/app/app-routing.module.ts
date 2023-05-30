import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { DetailsComponent } from './details/details.component';
import { DetailsforcompanyComponent } from './detailsforcompany/detailsforcompany.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path:'company',
    component:CompanyComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'detailForEmployee/:id',
    component:DetailsComponent
  },
  {
    path:'detailsForCompany/:id',
    component:DetailsforcompanyComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
