import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormArray } from '@angular/forms';
import { users } from '../users';

import { AdduserService } from '../adduser.service';

@Component({
  selector: 'app-signup-mentor',
  templateUrl: './signup-mentor.component.html',
  styleUrls: ['./signup-mentor.component.css']
})
export class SignupMentorComponent implements OnInit {

  registrationForm
  // materialForm
  submitted = false;

  constructor(
    private addUserService: AdduserService
  ) {

    this.registrationForm = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      experience: new FormControl(''),
      timezone: new FormControl('undefined'),
      timeslot: new FormControl('undefined'),
      
      linkedin: new FormControl(''),
      skills: new FormControl(''),
      videos: new FormControl(''),
      blogs: new FormControl(''),
      ppts: new FormControl(''),
      demos: new FormControl(''),

      role: new FormControl('mentor')
    });
    // this.materialForm = new FormGroup({
      
    // });


  }

  ngOnInit() {
  }

  addNew(user) {
    // window.alert('User added');
    this.addUserService.addNew(user);
    this.submitted = true;
  }

}
