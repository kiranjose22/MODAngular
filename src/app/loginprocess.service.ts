import { Injectable } from '@angular/core';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class LoginprocessService {

  constructor() { }
  flag = false
  currentUser
  authenticate(user) {
    this.flag = false;
    for (let i of users) {
      if (i.email === user.email && i.password === user.password) {
        console.log("Login success");
        this.flag = true;
        this.currentUser = i;
        console.log(this.currentUser)
        return true;
      }
    }
    if (!this.flag) {
      console.log("Login failed");
      return false;
    }
  }
  getCurrentUser() {
    return this.currentUser;
  }
}
