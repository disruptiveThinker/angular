/**
 * Created by ptd4w10 on 26/09/2017.
 */
export class Product {
  public id:string;
  public name:string;
  public price:number;
  public description:string;

  constructor(id:string, name:string, price:number, description:string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
