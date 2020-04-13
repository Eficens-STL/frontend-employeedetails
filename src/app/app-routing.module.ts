import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CreateEmployeeComponent} from './employees/create-employee/create-employee.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [ 
{path:'list',component:WelcomeComponent},
{path:'create',component:CreateEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
