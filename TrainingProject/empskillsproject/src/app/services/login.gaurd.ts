import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";
import {LoginService} from "./login.service";
/**
 * Created by ptd4w10 on 28/09/2017.
 */

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private ls:LoginService) { }

  canActivate() {
    return this.ls.getIsLoggedIn();

  }
}
