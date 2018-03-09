/**
 * Created by ptd4w10 on 26/09/2017.
 */
import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class ProductService {
  private productsData: Product[];

  restUrl:string = "http://localhost:2403/wsproducts";

  constructor(private http:Http) {
    /*this.productsData = [new Product("1", "WebSphere Application Server 8.5.5.11", 10000, "JEE Application Server"),
      new Product("2", "WebSphere Liberty Server", 5000, "WebSphere Liberty Application Server"),
      new Product("3", "Rational Application Developer IDE", 8000, "Rational Application Developer IDE"),
      new Product("4", "IntelliJ IDE", 3000, "IntelliJ IDE"),
      new Product("5", "GitHub", 2000, "Source Control"),
      new Product("6", "Jenkins", 2000, "Jenkins Continous Integration")
    ]*/
    this.productsData = [];
    //http.get("http://localhost:2403/wsproducts");
  }

  getProducts() {
    return this.http.get(this.restUrl);
  }

  getProductById(id:string) {
    return this.http.get(this.restUrl+"/"+id);
  }

  addProduct(newProduct:Product) {
    return this.http.post(this.restUrl, newProduct);
  }

  deleteProduct(id:string) {
    return this.http.delete(this.restUrl+"/" +id);
  }

  updateProduct(updateProduct:Product) {
    return this.http.put(this.restUrl, updateProduct);
  }

  /*getAll(): Observable<Product[]>{
    let products = this.http
      .get(this.restUrl);
    return products;
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }*/

}
