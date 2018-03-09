/**
 * Created by ptd4w10 on 28/09/2017.
 */

import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";
@Component({
  template: `<h1 class="jumbtron">Product Details</h1>
    <br>
    <div>ID: {{product.id}} </div>
    <br>
    <div>name: {{product.name}}</div>
    <br>
    <div>price: {{product.price}}</div>
    <br>
    <div>Description: {{product.description}}</div>
    
    <button class="btn btn-success" (click)="goBack()">Back</button>
`
})
export class DetailsComponent {
  product:Product = new Product("", "", 0, "");

  constructor(private  ar:ActivatedRoute, private ps:ProductService, private r:Router) {
    let paramId = ar.snapshot.params["id"];
    console.log("id: " +paramId);
    ps.getProductById(paramId).subscribe(
      (data) => {console.log(data.json())
        this.product = data.json(), (err) =>console.log("Error ", err)
      }
    );
    console.log("Product by ID: " +this.product);
  }

  goBack() {
    this.r.navigate(['/list']);
  }
}
