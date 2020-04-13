import { Component, OnInit } from '@angular/core';
import { DataService, EEDetails } from '../service/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  employees:string[]

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  getWelcomeMessage(){
    this.dataService.getEmployeeDetails().subscribe(
      response=> this.handleSuccesResponse(response)
    )
    
  }

  handleSuccesResponse(response){
    this.employees=response;

  }
}
