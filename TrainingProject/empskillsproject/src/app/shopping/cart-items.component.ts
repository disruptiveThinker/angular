/**
 * Created by ptd4w10 on 26/09/2017.
 */
import {Component} from "@angular/core";
import {CartItem} from "../models/cartitem.model";
import {CartService} from "../models/cart.service";

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html'
})
export class CartItemsComponent {
  cartItems: CartItem[] = [];

  constructor(private cs:CartService) {
    //let cs:CartService = new CartService();
    this.cartItems = cs.getCartItems();
  }

  cancelItem(selectedIndx:number) {
    this.cs.removeCartItem(selectedIndx);
  }

  totalAmount() {
    let totalAmt:number = 0;
    for(let e of this.cartItems) {
      totalAmt += e.price * e.quantity;
    }
    return totalAmt;
  }
}
