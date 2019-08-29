import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {users} from '../users';

import { AdduserService } from '../adduser.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {

  registrationForm
  submitted = false;
  constructor(
    private addUserService: AdduserService
  ) {
    
    
    this.registrationForm = new FormGroup({
      userName : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      password : new FormControl(''),
      role: new FormControl('user')
    });
   }

  ngOnInit() {
  }

  addNew(user) {
    // window.alert('User added');
    this.addUserService.addNew(user);
    this.submitted = true;
  }


}
