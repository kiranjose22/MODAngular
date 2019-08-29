import { Component, OnInit } from '@angular/core';
import { LoginprocessService } from '../loginprocess.service';
import { DataReaderService } from '../data-reader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainermenu',
  templateUrl: './trainermenu.component.html',
  styleUrls: ['./trainermenu.component.css']
})
export class TrainermenuComponent implements OnInit {

  currentUser
  currentUserData
  completedUserData
  loggedin

  constructor(
    private loginProcess: LoginprocessService,
    // private navbar: NavbarComponent
    private dataReader: DataReaderService,
    private route: Router
  ) {

    this.dataReader.getJSON('completed-trainings.json').subscribe(data => {
      console.log(data);
      this.completedUserData = data
    });
    this.dataReader.getJSON('current-trainings.json').subscribe(data => {
      console.log(data);
      this.currentUserData = data
    });



  }

  ngOnInit() {

    this.currentUser = this.loginProcess.getCurrentUser();
    this.loggedin = this.loginProcess.loggedin;
    if (!this.loggedin)
      this.route.navigate(['/home']);

  }

}
