import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl ='http://localhost:8080/springboot-crud-rest/api/v1/user';
  constructor(private http : HttpClient) { }

  public saveUser(user: User): Observable <object>{
    return this.http.post(this.baseUrl +"/create",user);
  }
}
