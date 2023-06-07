import { Component,OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyData:any;
  constructor(private s:ServiceService,private rout:Router){}
  ngOnInit(): void {
    this.getCompanyData();
  }
  getCompanyData(){
    this.s.getCompanyData().subscribe((data)=>{
      console.log(data);
      this.companyData=data;
      // console.log(this.companyData);
    })
  }
  details(id:number){
    this.rout.navigate(['detailsForCompany',id])
  }
  backToComapnyForm(){
    this.rout.navigate(['companyform'])
  }
  editCompanyDetails(id:number){
    let isvis:any=true;
    this.rout.navigate(['companyformbyId',isvis,id])
  }
 deleteCompanyDetails(id:number){
    this.s.deleteDataIncompany(id).subscribe((data:any)=>{
      console.log(data);
      this.getCompanyData();
    })
  }
  
}
