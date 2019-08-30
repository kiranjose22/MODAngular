import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginprocessService } from '../loginprocess.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm
  wrong = false;

  constructor(public router: Router,
    private loginProcess: LoginprocessService) {
    this.loginForm = new FormGroup({

      email: new FormControl(''),

      password: new FormControl(''),

      role: new FormControl('admin')
    });
  }

  ngOnInit() {
  }

  authenticate(user) {
    if (!this.loginProcess.authenticate(user))
      this.wrong = true;
    else {
      this.router.navigate(['/admin-menu']);
    }

  }

}
