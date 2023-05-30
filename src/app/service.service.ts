import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url="http://localhost:3000"
  constructor(private http:HttpClient) { }
  getEmployeeData(){
    return this.http.get(this.url+'/getEmployeeDetails')
  }
  getCompanyData(){
    return this.http.get(this.url+'/getCompanyDetails')
  }
  getEmployeeDatabyId(id:string|null){
    return this.http.get(this.url+'/getEmployeeDetails/'+id)
  }
  getCompanyDatabyId(id:string|null){
    return this.http.get(this.url+'/getCompanyDetails/'+id)
  }
}
