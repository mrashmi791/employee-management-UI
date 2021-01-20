import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private baseUrl ='http://localhost:8080/springboot-crud-rest/api/v1/employees';
  constructor(private http : HttpClient) { }

  public getEmployeeList():  Observable<any> {
    console.log(this.baseUrl);
    return this.http.get(this.baseUrl);
  }

  public createEmployee(employee: Employee) :Observable <Object> {
    return this.http.post(this.baseUrl,employee);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/"+id);
  }

  updateEmployee(id?: number, value?: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }


  public deleteEmployee(id?: number) {
    return this.http.delete(this.baseUrl+"/"+id, { responseType: 'text' });
  }

 
}
