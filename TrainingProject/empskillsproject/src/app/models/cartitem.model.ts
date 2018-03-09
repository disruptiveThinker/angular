/**
 * Created by ptd4w10 on 26/09/2017.
 */
export class CartItem {
  public name:string;
  public price:number;
  public quantity:number;

  constructor(name:string, price:number, quantity:number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

}
