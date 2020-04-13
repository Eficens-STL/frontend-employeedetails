import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class EEDetails{
constructor(public eid:number,
  public firstName:string,
  public lastName:string,
  public email:string,
  public phoneNumber:string,
  public technology:string,
  public startDate:Date,
  public endDate:Date,
  public clientName:string,
  public clientAddress:string,
  public vendorName:string,
  public vendorphone:string,
  public rate:number){}
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {

   }
   getEmployeeDetails(){
    return  this.http.get<EEDetails[]>('http://localhost:8978/employees');
     console.log("Enter Details");
   }

  
}
