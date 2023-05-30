import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { DetailsComponent } from './details/details.component';
import {  ServiceService} from "./service.service";
import { HttpClientModule } from '@angular/common/http';
import { DetailsforcompanyComponent } from './detailsforcompany/detailsforcompany.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    EmployeeComponent,
    DetailsComponent,
    DetailsforcompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
