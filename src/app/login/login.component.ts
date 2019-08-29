import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginprocessService } from '../loginprocess.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm
  wrong = false;

  constructor(public router: Router,
    private loginProcess: LoginprocessService) {
    this.loginForm = new FormGroup({

      email: new FormControl(''),

      password: new FormControl(''),

      role: new FormControl('undefined')
    });

  }

  ngOnInit() {
  }

  authenticate(user) {
    if (!this.loginProcess.authenticate(user))
      this.wrong = true;
    else {
      if (user.role == "user") {
        this.router.navigate(['/user-menu']);
      }
      else {
        this.router.navigate(['/trainer-menu']);
      }
    }

  }
}
