import { Component,OnInit } from '@angular/core';
import {ServiceService  } from "../service.service";
import { ActivatedRoute } from "@angular/router";
interface CompanyData{
  cmpid:number;
  cmpname:string;
  location:string;
}
@Component({
  selector: 'app-detailsforcompany',
  templateUrl: './detailsforcompany.component.html',
  styleUrls: ['./detailsforcompany.component.scss']
})
export class DetailsforcompanyComponent implements OnInit{
  details:CompanyData[]=[];  
  constructor(private s:ServiceService , private rout:ActivatedRoute){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id=this.rout.snapshot.paramMap.get('id');
    this.s.getCompanyDatabyId(id).subscribe((data:any)=>{
      console.log(data);
      this.details=data;
    })
  }
}