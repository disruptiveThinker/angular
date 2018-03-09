import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header.component";
import {ShoppingModule} from "./shopping/shopping.module"
import {CartService} from "./models/cart.service";
import {ProductService} from "./services/product.service";
import {
  HomeComponent, ListComponent, ManageComponent, NotFoundComponent, LoginComponent,
  LogoutComponent, ErrorComponent
} from "./routes.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {LoginService} from "./services/login.service";
import {LoginGuard} from "./services/login.gaurd";
import {ReversePipe} from "./app.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    ManageComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule, ShoppingModule, HttpModule, FormsModule, RouterModule.forRoot([
      {path: "", redirectTo:"list", pathMatch:"full"},
      {path: "home", component:HomeComponent},
      {path: "list", component:ListComponent},
      {path: "manage", component:ManageComponent, canActivate:[LoginGuard]},
      {path: "login", component:LoginComponent},
      {path: "logout", component:LogoutComponent},
      {path: "error", component:ErrorComponent},
      {path: "**", component:NotFoundComponent}
    ], {useHash:true})
  ],
  providers: [CartService, ProductService, LoginService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
