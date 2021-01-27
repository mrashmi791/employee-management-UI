import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { IndexComponent } from './components/index/index.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'add',
    component: CreateEmployeeComponent
  },
  {
    path: 'update/:id',
    component: UpdateEmployeeComponent
  },
  {
    path: 'details/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: 'create-user',
    component: RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
