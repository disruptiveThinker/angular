/**
 * Created by ptd4w10 on 26/09/2017.
 */
import {Component} from "@angular/core";
import {LoginService} from "./services/login.service";
@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-default">
    <div class="narbar-header">
      <a href="#" class="navbar-brand">{{cmpHeading}}</a>
    </div>
    <ul class="nav navbar-nav">
      <li routerLinkActive="active"><a routerLink="/home">Home</a></li>
      <li routerLinkActive="active"><a routerLink="/list">Shopping List</a></li>
      <li *ngIf="isUserLoggedIn()" routerLinkActive="active"><a routerLink="/manage">Manage Products</a></li>
      <li *ngIf="!isUserLoggedIn()" routerLinkActive="active"><a routerLink="/login">Login</a></li>
      <li routerLinkActive="active"><a routerLink="/register">Register</a></li>
      <li routerLinkActive="active"><a routerLink="/skills">Skills</a></li>
      <li *ngIf="isUserLoggedIn()" routerLinkActive="active">
      <a routerLink="/logout" (click)="logout()">Logout</a></li>
    </ul>
  </nav>
  `
})
export class HeaderComponent {
  cmpHeading: string = "Skills Portal";

  constructor(private ls:LoginService) {
  }

  isUserLoggedIn() {
    return this.ls.getIsLoggedIn();
  }

  logout() {
    this.ls.setIsLoggedIn(false);
  }
}
