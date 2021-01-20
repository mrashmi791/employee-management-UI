import { Observable } from "rxjs";
import { EmployeeService } from "../service/employee.service";
import { Employee } from "../models/employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  id: number = 0;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employeeService.getEmployeeList().subscribe(data =>  {
      console.log('response:', data);
      this.employees = data;
    });
  }

  deleteEmployee(id?: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: any){
    this.router.navigate(['details', id]);
  }
  updateEmployee(id?: number){
    this.router.navigate(['update', id]);
  }

  
}

