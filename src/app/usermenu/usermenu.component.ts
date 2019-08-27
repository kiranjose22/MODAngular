import { Component, OnInit } from '@angular/core';
import { LoginprocessService } from '../loginprocess.service';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  currentUser
  constructor(
    private loginProcess: LoginprocessService
    ) { }
  

  ngOnInit() {
    this.currentUser = this.loginProcess.getCurrentUser();
  }

}
