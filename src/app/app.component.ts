import { Component } from '@angular/core';
import { products } from '../app/shop-products';
import { Product } from './shared/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adz';

  myProduct: Product[] = products;
  myProdTitle: any;
  objValues = Object.values;
  objKeys = Object.keys;

  constructor() {
    console.log(this.myProduct);
    this.myProduct.forEach((el) => {
      this.myProdTitle = Object.keys(el);
    });
  }
}
