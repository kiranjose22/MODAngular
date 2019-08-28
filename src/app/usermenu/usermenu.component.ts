import { Component, OnInit } from '@angular/core';
import { LoginprocessService } from '../loginprocess.service';
// import {NavbarComponent} from '../navbar/navbar.component'
@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  currentUser
  loggedin
  
  constructor(
    private loginProcess: LoginprocessService
    // private navbar: NavbarComponent
    ) { }
  

  ngOnInit() {
    this.currentUser = this.loginProcess.getCurrentUser();
    this.loggedin = this.loginProcess.loggedin;
    // this.navbar.ngOnInit();
  }

}
