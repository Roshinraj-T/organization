import { Component,OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  employeeData:any;
  constructor(private s:ServiceService,private rout:Router){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.s.getEmployeeData().subscribe((data)=>{
      console.log(data);
      this.employeeData=data
      
    })
  }
  details(id:number){
    console.log(id);
    
    this.rout.navigate(['detailForEmployee',id])
  }
}
