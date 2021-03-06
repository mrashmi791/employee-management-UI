import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = new Employee(0,'','','',false);
  // employees: Employee[] = [];
  submitted = false;
  // check: string = 'hello..';

  constructor(private employeeService : EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted=false;
    this.employee = new Employee(0,'','','',false);
  }

  public save(): void {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.employee = new Employee(0,'','','',false);
      this.gotoList();
    },
    error => console.log(error));
    
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
