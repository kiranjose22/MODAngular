import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {

  registrationForm
  constructor() {
    this.registrationForm = new FormGroup({
      userName : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      password : new FormControl('')
    });
   }

  ngOnInit() {
  }


}
