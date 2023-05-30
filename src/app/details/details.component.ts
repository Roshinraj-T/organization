import { Component,OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { ActivatedRoute } from "@angular/router";
interface EmpDetails{
  empname:string;
  empid:number;
  address:string;
  gender:string;
  contactnumber:number
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent  implements OnInit{
  detailsData:EmpDetails[]=[];
  constructor(private s:ServiceService,private rout:ActivatedRoute){
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id = this.rout.snapshot.paramMap.get('id')
    this.s.getEmployeeDatabyId(id).subscribe((data:any)=>{
      console.log(data);
      this.detailsData=data
    })
  }

}