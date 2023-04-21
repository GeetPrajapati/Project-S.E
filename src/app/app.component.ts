import { Component } from '@angular/core';

interface Product {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    { name: 'T-shirt', quantity: 10 },
    { name: 'Hoodie', quantity: 5 },
    { name: 'Jeans', quantity: 3 },
    { name: 'Other Clothes', quantity: 350 }
  ];

  newProduct: Product = {
    name: '',
    quantity: 0
  };

  addProduct() {
    if (this.newProduct.name && this.newProduct.quantity > 0) {
      this.products.push({ ...this.newProduct });
      this.newProduct.name = '';
      this.newProduct.quantity = 0;
    }
  }
}
