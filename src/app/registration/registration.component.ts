import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  // user: User[] = [];
  user:User = new User(0,'','','','','0','');
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required]],
      address: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['',[ Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{5,10}$')]],
      confirmPassword: ['',Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

  public registerUser(): void {
    console.log(this.registerForm.value)
    this.userService.saveUser(this.user).subscribe(data =>  {
      console.log('response:', data);
      this.user = data;
    });
    
  }

}



