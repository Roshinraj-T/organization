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
  insertDataToCompany(data:any){
    return this.http.post(this.url+'/insert',data)
  }
  updateDataToCompany(data:any){
    console.log('service update data',data);
    
    return this.http.put(this.url+'/update',data)
  }
  deleteDataIncompany(id:number){
    return this.http.put(this.url+'/delete',{cmpid:id})
  }
}
