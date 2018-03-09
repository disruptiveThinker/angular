/**
 * Created by ptd4w10 on 27/09/2017.
 */
import {Product} from "./models/product.model";
import {ProductService} from "./services/product.service";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Component} from "@angular/core";

@Component({
  template: `<h3>Welcome to Home View</h3>
    <br> {{"COLRUYT"}} - {{3+2}} 
    <br>Price:  {{price | currency:'INR' | lowercase}}
    <br>Date: {{myDate | date:"MMM/dd/yyyy"}}
    <br>Product Name: {{productName | uppercase  | reverseText}}
    <iframe [src]="trustUrl"></iframe>
    `
})
export class HomeComponent {

  price:number = 100.121;
  myDate = new Date();
  productName = "Samsung Mobile";

  myUrl = "https://www.youtube.com/embed/-zW1zHqsdyc";
  trustUrl;
  constructor(private ds:DomSanitizer) {
   this.trustUrl = ds.bypassSecurityTrustResourceUrl(this.myUrl);
  }
}

@Component({
  template: `<div class="col-sm-6">
  <product-list></product-list>
  </div>
  <div class="col-sm-6 well">
    <cart-items></cart-items>
    </div>
`
})
export class ListComponent {
}

@Component({
  template: `<h3 class='well'>404. Ooooops!! Not Found</h3>`
})
export class NotFoundComponent {
}

@Component({
  templateUrl: './manage.component.html',

})
export class ManageComponent {
  mgProducts: Product[];
  frmProduct: Product = new Product("", "", 0, "");
  flag: number = -1;

  constructor(private ps: ProductService) {
    //this.mgProducts = ps.getProducts();
    this.ps.getProducts().subscribe(
      (data) => {
        console.log(data)
        console.log(data.json())
        this.mgProducts = data.json(), (err) =>console.log("Error ", err)
      }
    );
  }

  saveProduct() {
    this.ps.addProduct(this.frmProduct).subscribe(
      (resp) => {
        if (this.flag == -1)
          this.mgProducts.push(resp.json())
        else
          this.mgProducts[this.flag] = resp.json(),
            console.log("Save Success", resp)
      },
      (err) => console.log("Save Error", err)
    );
    this.frmProduct = new Product("", "", 0, "");

  }

  deleteProduct(id: string, index: number) {
    this.ps.deleteProduct(id).subscribe((resp) => {
        this.mgProducts.splice(index, 1),
          console.log("Delete Success")
      },
      (err) => console.log("Delete Error", err)
    );
  }

  editProduct(selectedProduct: Product, index: number) {
    //console.log(this.frmProduct);
    //this.frmProduct = selectedProduct;
    Object.assign(this.frmProduct, selectedProduct);
    this.flag = index;
    /*this.ps.updateProduct(this.frmProduct).subscribe(
     (resp) => {this.mgProducts[index] = resp.json(), console.log("Update Success")},
     (err) => console.log("Update Error", err)
     );*/
    //this.frmProduct = new Product("", "", 0, "");
  }
}

@Component({
  template: `
<div class="col-md-6 col-md-offset-3">
<h3>Login View</h3>
<form class="well" #f="ngForm"><!--{{f.value | json}}-->
<div class="form-group">
Username: <input type="text" class="form-control" name="txtUserName" #txtUser="ngModel" ngModel required  >
<b style="color:red" *ngIf="txtUser.errors?.required && txtUser.dirty">Username is required </b>
</div>
<div class="form-group">
Password: <input type="password" class="form-control" name="txtPassword" #txtPwd="ngModel" ngModel required minlength="3" maxlength="9">
<b style="color:red" *ngIf="txtPwd.errors?.required && txtPwd.dirty">Password is required </b>
<b style="color:red" *ngIf="txtPwd.errors?.minlength">Password minimum length is 3 and maximum length is 8</b>
</div>
<button type="button" class="btn btn-primary" (click)="login(txtUser.value, txtPwd.value)" [disabled]="f.invalid">Login</button>

</form>
</div>
`
})
export class LoginComponent {

  constructor(private router: Router, private ls: LoginService) {
  }

  login(username: string, password: string) {
    console.log("Inside login action, " + username);
    if (this.ls.isValidUser(username, password)) {
      this.router.navigate(['/manage']);
    } else {
      this.router.navigate(['/error']);
    }
  }
}

@Component({
  template: `<h3>Logout Success</h3>
`
})
export class LogoutComponent {
}

@Component({
  template: `<h3>Invalid Credentials, try again...</h3>
`
})
export class ErrorComponent {
}


