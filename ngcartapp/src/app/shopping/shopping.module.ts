/**
 * Created by ptd4w10 on 26/09/2017.
 */
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ProductListComponent} from "./product-list.component";
import {CartItemsComponent} from "./cart-items.component";
import {CommonModule} from "@angular/common";
import {DetailsComponent} from "./details.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ProductListComponent, CartItemsComponent, DetailsComponent],
  exports: [ProductListComponent, CartItemsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild([{path: "details/:id", component: DetailsComponent}])]
})
export class ShoppingModule {
}
