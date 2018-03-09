/**
 * Created by ptd4w10 on 26/09/2017.
 */
import {Component} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {CartService} from "../models/cart.service";
import {CartItem} from "../models/cartitem.model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'

})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private cs: CartService, private ps: ProductService) {
    //let ps: ProductService = new ProductService();
    //this.products = ps.getProducts();
    this.ps.getProducts().subscribe(
      (data) => {
        console.log(data)
        console.log(data.json())
        this.products = data.json(), (err) =>console.log("Error ", err)
      }
    );
  }

  addToCart(selectedProduct: Product) {
    let existingItems: CartItem[] = this.cs.getCartItems();
    let isExists: boolean = false;
    for (let e of existingItems) {
      if (e.name == selectedProduct.name) {
        console.log("Selected Item matched");
        e.quantity++;
        isExists = true;
      }
    }
    if (!isExists) {
      let item: CartItem = new CartItem(selectedProduct.name, selectedProduct.price, 1);
      this.cs.addCartItem(item);
    }
  }
}
