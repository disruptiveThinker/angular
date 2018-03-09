/**
 * Created by ptd4w10 on 26/09/2017.
 */

import {CartItem} from "./cartitem.model";
import {Injectable} from "@angular/core";

@Injectable()
export class CartService {
  cartItemsData: CartItem[];

  constructor() {
    this.cartItemsData = [];
  }

  addCartItem(newItem: CartItem): void {
    this.cartItemsData.push(newItem);
  }

  removeCartItem(idx: number) {
    this.cartItemsData.splice(idx, 1);
  }

  getCartItems() {
    return this.cartItemsData;
  }
}
