import { Component,OnInit } from '@angular/core';
import {  ServiceService} from "../service.service";
import { Router } from "@angular/router";
import {  ActivatedRoute} from "@angular/router";

interface companyTableDetails{
  cmpid:number;
  cmpname:string;
  location:string; 
}
@Component({
  selector: 'app-companyform',
  templateUrl: './companyform.component.html',
  styleUrls: ['./companyform.component.scss']
})
export class CompanyformComponent implements OnInit{
  companyData:companyTableDetails[]=[];
  cmpid:any;
  cmpname:any;
  location:any;
  constructor(private s:ServiceService,private route:Router,private router:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.'); 
    let id=this.router.snapshot.paramMap.get('id');
    this.s.getCompanyDatabyId(id).subscribe((data:any)=>{
     this.cmpid=data[0].cmpid;
     this.cmpname=data[0].cmpname;
     this.location=data[0].location;
    console.log(data);
    
    
    })
  }
  addcompanyDeatils(){
    let data:any={
      // cmpid:this.cmpid,
      cmpname:this.cmpname,
      location:this.location
    }
    this.s.insertDataToCompany(data).subscribe((data)=>{
      console.log(data);
      this.getcompanytable();          
    });
  }
  getcompanytable(){
    this.route.navigate(['company'])
  }
  updateCompanyDetails(id:number){
    let data:any={
      cmpid:this.cmpid,
      cmpname:this.cmpname,
      location:this.location
    };
    console.log(data);
    
    this.s.updateDataToCompany(data).subscribe((data)=>{
      console.log(data);
      this.getcompanytable()
    })
  }
}
