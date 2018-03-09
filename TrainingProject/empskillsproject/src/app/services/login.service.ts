/**
 * Created by ptd4w10 on 28/09/2017.
 */

import {Injectable} from "@angular/core";
@Injectable()
export class LoginService {

  private isLoggedIn:boolean = false;

  isValidUser(username: string, pwd: string) {
    if (username == "admin") {
      this.setIsLoggedIn(true);
      return true;
    } else {
      this.setIsLoggedIn(false);
      return false;
    }
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
