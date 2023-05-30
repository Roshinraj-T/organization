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
    // throw new Error('Method not implemented.');
    this.s.getCompanyData().subscribe((data)=>{
      console.log(data);
      this.companyData=data;
      // console.log(this.companyData);
    })
  }
  details(id:number){
    this.rout.navigate(['detailsForCompany',id])
  }
}
